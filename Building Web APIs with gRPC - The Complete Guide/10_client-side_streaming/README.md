## Section 10: Client-side Streaming

#### Table of Contents
- Introduction
- Implementing Client-side Streaming in the Server
- Implementing the Client


### Introduction

- Allows streaming from the client to the server
- The client opens a channel to the server and sends messages continuously

![Architecture](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/10_client-side_streaming/architecture.png)

### Implementing Client-side Streaming in the Server

`grpc\groomserver\Protos\groom.proto`

```cs
message NewsFlash {
    google.protobuf.Timestamp news_time=1;
    string news_item=2;
}

message NewsStreamStatus {
    bool success=1;
}

service Groom {
    ...
    rpc SendNewsFlash(stream NewsFlash) returns (NewsStreamStatus);
}
```

`grpc\groomserver\Services\GroomService.cs`
```cs

public class GroomService : Groom.GroomBase
{
    ...
    public override async Task<NewsStreamStatus> SendNewsFlash(IAsyncStreamReader<NewsFlash> newsStream, ServerCallContext context)
    {
        while (await newsStream.MoveNext())
        {
            var news = newsStream.Current;
            Console.WriteLine($"News flash: {news.NewsItem}");
        }

        return new NewsStreamStatus { Success = true };
    }
}
```


![Client Streaming](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/10_client-side_streaming/client_streaming.png)



### Implementing the Client

`grpc\newsbot`
```
npm init -y
npm i @grpc/grpc-js
npm i @grpc/proto-loader
```

`grpc\newsbot\Protos\groom.proto`
```cs
syntax="proto3";

package groom;

import "google/protobuf/timestamp.proto";

message NewsFlash {
    google.protobuf.Timestamp news_time=1;
    string news_item=2;
}

message NewsStreamStatus {
    bool success=1;
}

service Groom {
    rpc SendNewsFlash(stream NewsFlash) returns (NewsStreamStatus);
}
```

`grpc\newsbot\client.js`

F5 to run `groomserver`

F5 to run `newsbot`

The `newsbot` is streaming news to the the server with pre-defined contents.


![Newsbot Debug](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/10_client-side_streaming/newsbot_debug.png)

![Newsbot Success](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/10_client-side_streaming/newsbot_success.png)