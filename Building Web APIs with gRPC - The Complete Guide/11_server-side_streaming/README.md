## Section 11: Server-side Streaming

#### Table of Contents
- Introduction
- Implementing Server-side Streaming in the Server
- Connecting the News Bot to the Server Stream
- Implementing the Client


### Introduction

- Allows streaming from the server to the client
- The client opens a channel to the server and the server uses it for sending messages
  continuously

![Architecture](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/11_server-side_streaming/architecture.png)


### Implementing Server-side Streaming in the Server

`grpc\groomserver\Protos\groom.proto`
```cs
...
import "google/protobuf/empty.proto";
...
message ReceiveMessage {
    google.protobuf.Timestamp msg_time=1;
    string contents=2;
    string user=3;
}

service Groom {
    ...
    rpc StartMonitoring(google.protobuf.Empty) returns (stream ReceiveMessage);
}
```

`grpc\groomserver\Services\GroomService.cs`
```cs
...
using Google.Protobuf.WellKnownTypes;

public class GroomService : Groom.GroomBase
{
    ...

    public override async Task StartMonitoring(Empty request, IServerStreamWriter<ReceivedMessage> streamWriter, ServerCallContext context)
    {
        while (true)
        {
            await streamWriter.WriteAsync(new ReceivedMessage
            {
                MsgTime = Timestamp.FromDateTime(DateTime.UtcNow),
                User = "1",
                Contents = "Test msg"
            });
            await Task.Delay(500);
        }
    }
}

```

![Server Streaming](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/11_server-side_streaming/server_streaming.png)



### Connecting the News Bot to the Server Stream

Add `grpc\groomserver\Utils\MessagesQueue.cs`

```cs
using gRoom.gRPC.Utils;

public class GroomService : Groom.GroomBase
{
    ...

    public override async Task<NewsStreamStatus> SendNewsFlash(IAsyncStreamReader<NewsFlash> newsStream, ServerCallContext context)
    {
        while (await newsStream.MoveNext())
        {
            var news = newsStream.Current;
            MessagesQueue.AddNewsToQueue(news); // added this line
            Console.WriteLine($"News flash: {news.NewsItem}");
        }

        return new NewsStreamStatus { Success = true };
    }

    public override async Task StartMonitoring(Empty request, IServerStreamWriter<ReceivedMessage> streamWriter, ServerCallContext context)
    {
        while (true)
        {
            // await streamWriter.WriteAsync(new ReceivedMessage
            // {
            //     MsgTime = Timestamp.FromDateTime(DateTime.UtcNow),
            //     User = "1",
            //     Contents = "Test msg"
            // });

            // comment the above logic and add the following logic 
            if (MessagesQueue.GetMessagesCount() > 0)
            {
                await streamWriter.WriteAsync(MessagesQueue.GetNextMessage());
            }
            await Task.Delay(500);
        }
    }
}
```

F5 to run the server

F5 to run the newsbot

The `newsbot` is streaming news to the the server now.

![Newsbot Streaming](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/11_server-side_streaming/newsbot_streaming.png)



### Implementing the Client

`grpc\groomadmin\Protos\groom.proto`
```cs
syntax="proto3";

option csharp_namespace="gRoom.gRPC.Messages";

package groom;

import "google/protobuf/timestamp.proto";
import "google/protobuf/empty.proto";

message ReceivedMessage {
    google.protobuf.Timestamp msg_time=1;
    string contents=2;
    string user=3;
}

service Groom {
    rpc StartMonitoring(google.protobuf.Empty) returns (stream ReceivedMessage);
}
```

Download the packages required to run this project `groomadmin`
```
dotnet restore
```

`grpc\groomadmin\Protos\groom.proto`
```cs
using Grpc.Net.Client;
using gRoom.gRPC.Messages;
using Google.Protobuf.WellKnownTypes;

using var channel = GrpcChannel.ForAddress("http://localhost:5147");
var client = new Groom.GroomClient(channel);

Console.WriteLine("*** Admin Console started ***");
Console.WriteLine("Listening...");

// ADD THE MONITORING CODE BELOW THIS LINE
using var call = client.StartMonitoring(new Empty());
var cts = new CancellationTokenSource();

while (await call.ResponseStream.MoveNext(cts.Token))
{
    var msg = call.ResponseStream.Current;

    Console.WriteLine($"New message: {msg.Contents}, user: {msg.User}, at: {msg.MsgTime}");
}
```

Run `groomserver`, `newsbot`, `groomadmin` to see the result.