## Section 13: Advanced Topics

#### Table of Contents
- Introduction
- Deadlines
- Implementing Deadlines
- Error Handling
- Adding Error Handling to gRoom
- Cancelling Requests
- Implementing Request Cancellation
- Authentication
- Introduction to OAuth
- Adding Authentication to gRoom


### Introduction

#### Discussion topics
- Deadlines
- Error Handling
- Cancellations
- Authentication


### Deadlines
- Basically a timeout
- A way to specify how long a client should wait for a response from the server
- If no response was received within this period -- an exception is thrown
- Deadline implementation differs between platforms
- Some specify timeout -- how long should the client wait
- Some speicify a fixed point in time -- if no response was received by this time, 
  throw an exception
- Almost all of the platforms have a default timeout
- We'll demonstrate deadline on the room client


### Implementing Deadlines

`grpc\fullroomclient\Program.cs`
```cs
try
{
    var joinResponse = client.RegisterToRoom(new RoomRegistrationRequest() { RoomName = room, UserName = username }, deadline: DateTime.UtcNow.AddSeconds(5));
    ...
}
```

`grpc\groomserver\Services\GroomService.cs`
```cs
    public override async Task<RoomRegistrationResponse> RegisterToRoom(RoomRegistrationRequest request, ServerCallContext context)
    {
        await Task.Delay(10000);

        UsersQueues.CreateUserQueue(request.RoomName, request.UserName);
        var resp = new RoomRegistrationResponse() { Joined = true };
        return await Task.FromResult(resp);
    }
```

F5 to run `groomserver` and `fullroomclient`


### Error Handling
- gRPC has an extensive error handling information
- As opposed to REST it does not build on the built-in HTTP errors
- When an error occurs in gRPC it returns status code indicating the type of
  the error, and additional information when relevant
- Some common status codes:
  - CANCELLED -- When a request is cancelled
  - DEADLINE_EXCEEDED -- When a specified deadline is exceeded
  - UNAVAILABLE -- The server is not available to handle the request
  - INTERNAL -- An error occurred handling the in/out data
- Full list of status code can be found here:
  https://grpc.io/docs/guides/error/#error-status-codes



### Adding Error Handling to gRoom

`grpc\fullroomclient\Program.cs`
```cs
try
{
    var joinResponse = client.RegisterToRoom(new RoomRegistrationRequest() { RoomName = room, UserName = username }, deadline: DateTime.UtcNow.AddSeconds(5));
    ...
}
catch (Grpc.Core.RpcException ex)
{
    if (ex.StatusCode == Grpc.Core.StatusCode.DeadlineExceeded)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"Timeout exceeded when trying to get in the {room} room. Please try again later.");
        Console.ForegroundColor = ConsoleColor.Gray;
        Console.WriteLine("Press any key to close the window.");
        Console.Read();
        return;
    }
}
```

F5 to run `groomserver` and `fullroomclient`


### Cancelling Requests
- As we saw, gRPC supports streaming
- Sometimes we need to be able to cancel the streaming
- gRPC has built-in support for such cancellations
- Implementation varies between platforms, but the idea is the same


### Implementing Request Cancellation

`grpc\fullroomclient\Program.cs`
```cs
...
while (true)
{
    var input = Console.ReadLine();
    RestoreInputCursor();
    if (input == "X")
    {
        cts.Cancel();
        Console.WriteLine("Chat cancelled");
    }
    else
    {

        // TYPE HERE THE CODE FOR SENDING MESSAGES TO THE SERVER
        var reqMsg = new ChatMessage();
        reqMsg.Contents = input;
        reqMsg.MsgTime = Timestamp.FromDateTime(DateTime.UtcNow);
        reqMsg.Room = room;
        reqMsg.User = username;
        call.RequestStream.WriteAsync(reqMsg);
    }

}
```

F5 to run `groomserver` and `fullroomclient`

`grpc\fullroomclient\Program.cs`
```cs
var task = Task.Run(async () =>
{

    while (true)
    {
        // TYPE HERE THE CODE FOR RECEIVING MESSAGES FROM THE SERVER
        try
        {
            if (await call.ResponseStream.MoveNext(cts.Token))
            {
                var msg = call.ResponseStream.Current;
                var left = Console.CursorLeft - promptText.Length;
                PrintMessage(msg);
            }
            await Task.Delay(500);
        }
        catch (Grpc.Core.RpcException ex)
        {
            if (ex.StatusCode == Grpc.Core.StatusCode.Cancelled)
            {
                Console.WriteLine("Cancelled!");
                break;
            }
        }
    }
});
```

`grpc\groomserver\Services\GroomService.cs`
```cs
        // Check for messages to send to the user
        var respTask = Task.Run(async () =>
        {
            while (true)
            {
                if (context.CancellationToken.IsCancellationRequested)
                {
                    return;
                }
                ...
            }
        });
```

### Authentication
- gRPC supports various authentication techniques
- Authentication details are passed as Credentials
- We usually want to secure two elements:
  - Transport: using secure protocl such as TLS
  - User: using identity token such as JWT, usually implemented using OAuth


### Introduction to OAuth

#### OAuth2
- Standard protocol for authentication & authorization
- Widely used, mainly in web apps
- We'll discuss only high-level details

#### OAuth2 Components
|                          |                                                             |
|--------------------------|-------------------------------------------------------------|
| **User**                 | The user who wants to access protected resources in the API |
| **Client App**           | The client application accessing the API                    |
| **Authorization Server** | Authorizes the user for the client application              |
| **Resource Server**      | The API being accessed                                      |

![OAuth2 Flow](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/13_advanced_topics/flow.png)

https://feedly.com/

#### App Registration
- Authorization Server should be familiar with the Resource Server (API)
- Resource Server must register itself with the Authorization Server
- 

https://github.com/settings/applications/new

![Github](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/13_advanced_topics/github.png)

Get the credentials from "Client ID" and "Client Secret"

![Client](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/13_advanced_topics/client.png)

#### JWT
- JSON Web Token
- Contains the data the server needs in order to authenticate the user
- Has three sections
  - Header -- type of token (JWT) and signining algorithm
  - Payload -- Data on the user
  - Signature
  - Base64 encoded
  - Concatenated with .

![JWT](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/13_advanced_topics/jwt.png)


### Adding Authentication to gRoom

Observe that `https://localhost:7091` is the secured HTTP connection.

Copy this URL to `fullroomclient`
`grpc\fullroomclient\Program.cs`
```cs
using var channel = GrpcChannel.ForAddress("https://localhost:7091");
```

F5 to run `groomserver` and `fullroomclient`

Revert the URL to the HTTP one and a fake token
`grpc\fullroomclient\Program.cs`
```cs
using var channel = GrpcChannel.ForAddress("http://localhost:5147");

...

Console.WriteLine($"Joining room {room}...");

try
{
    var headers = new Grpc.Core.Metadata();
    headers.Add("Authorization", "Bearer slkoweiujkln123klcnm1==120");
    var joinResponse = client.RegisterToRoom(new RoomRegistrationRequest() { RoomName = room, UserName = username }, deadline: DateTime.UtcNow.AddSeconds(5), headers: headers);
    ...
}
```


