## Section 12: Bi-Directional Streaming

#### Table of Contents
- Introduction
- Implementing Bi-Directional Streaming in the Server
- Testing the Server
- Implementing the Client
- Final Touches
- Putting It All Together


### Introduction



### Implementing Bi-Directional Streaming in the Server
- Allows streaming from the server to the client and vice versa
- The client does not need to open a channel to the server in order for bi-directional
  streaming to work


![Architecture](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/12_bi-directional_streaming/architecture.png)



### Testing the Server

`grpc\groomserver\Protos\groom.proto`
```cs
...

message RoomRegistrationRequest {
    string room_name=1;
    string user_name=2;
}

message RoomRegistrationResponse {
    bool joined=1;
}

...

message ChatMessage {
    google.protobuf.Timestamp msg_time=1;
    string contents=2;
    string user=3;
    string room=4;
}


service Groom {
    ...
    rpc StartChat(stream ChatMessage) returns (stream ChatMessage);
}
```

`grpc\groomserver\Services\GroomService.cs`
```cs
...
public class GroomService : Groom.GroomBase
{
    private readonly ILogger<GroomService> _logger;
    public GroomService(ILogger<GroomService> logger)
    {
        _logger = logger;
    }

    public override async Task<RoomRegistrationResponse> RegisterToRoom(RoomRegistrationRequest request, ServerCallContext context)
    {
        UsersQueues.CreateUserQueue(request.RoomName, request.UserName);
        var resp = new RoomRegistrationResponse() { Joined = true };
        return await Task.FromResult(resp);
    }

    public override async Task<NewsStreamStatus> SendNewsFlash(IAsyncStreamReader<NewsFlash> newsStream, ServerCallContext context)
    {
        while (await newsStream.MoveNext())
        {
            var news = newsStream.Current;
            MessagesQueue.AddNewsToQueue(news);
            Console.WriteLine($"News flash: {news.NewsItem}");
        }

        return new NewsStreamStatus { Success = true };
    }

    public override async Task StartMonitoring(Empty request, IServerStreamWriter<ReceivedMessage> streamWriter, ServerCallContext context)
    {
        while (true)
        {
            if (MessagesQueue.GetMessagesCount() > 0)
            {
                await streamWriter.WriteAsync(MessagesQueue.GetNextMessage());
            }
            await Task.Delay(500);
        }
    }

    public override async Task StartChat(IAsyncStreamReader<ChatMessage> incomingStream, IServerStreamWriter<ChatMessage> outgoingStream, ServerCallContext context)
    {

        // Wait for the first message to get the user name
        while (!await incomingStream.MoveNext())
        {
            await Task.Delay(100);
        }

        string userName = incomingStream.Current.User;
        string room = incomingStream.Current.Room;
        Console.WriteLine($"User {userName} connected to room {incomingStream.Current.Room}");

        // TEST TEST TEST TEST - TO USE ONLY WHEN TESTING WITH BLOOMRPC
        UsersQueues.CreateUserQueue(room, userName);
        // END TEST END TEST END TEST

        // Get messages from the user
        var reqTask = Task.Run(async () =>
        {
            while (await incomingStream.MoveNext())
            {
                Console.WriteLine($"Message received: {incomingStream.Current.Contents}");
                UsersQueues.AddMessageToRoom(ConvertToReceivedMessage(incomingStream.Current), incomingStream.Current.Room);
            }
        });


        // Check for messages to send to the user
        var respTask = Task.Run(async () =>
        {
            while (true)
            {
                var userMsg = UsersQueues.GetMessageForUser(userName);
                if (userMsg != null)
                {
                    var userMessage = ConvertToChatMessage(userMsg, room);
                    await outgoingStream.WriteAsync(userMessage);
                }
                if (MessagesQueue.GetMessagesCount() > 0)
                {
                    var news = MessagesQueue.GetNextMessage();
                    var newsMessage = ConvertToChatMessage(news, room);
                    await outgoingStream.WriteAsync(newsMessage);
                }

                await Task.Delay(200);
            }
        });

        // Keep the method running
        while (true)
        {
            await Task.Delay(10000);
        }
    }


    private ReceivedMessage ConvertToReceivedMessage(ChatMessage chatMsg)
    {
        var rcMsg = new ReceivedMessage();
        rcMsg.Contents = chatMsg.Contents;
        rcMsg.MsgTime = chatMsg.MsgTime;
        rcMsg.User = chatMsg.User;

        return rcMsg;
    }

    private ChatMessage ConvertToChatMessage(ReceivedMessage rcMsg, string room)
    {
        var chatMsg = new ChatMessage();
        chatMsg.Contents = rcMsg.Contents;
        chatMsg.MsgTime = rcMsg.MsgTime;
        chatMsg.User = rcMsg.User;
        chatMsg.Room = room;

        return chatMsg;
    }
}
```

F5 to run `groomserver`

F5 to run `newsbot`

![Architecture](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/12_bi-directional_streaming/testing_server.png)



### Implementing the Client

`grpc\fullroomclient\`


### Final Touches


### Putting It All Together

```
cd grpc/fullroomclient
dotnet publish -o publish
```

`grpc\fullroomclient\publish`

F5 to run `groomserver`, `groomadmin`

Click `grpc\fullroomclient\publish\fullroomclient.exe` to run it.

