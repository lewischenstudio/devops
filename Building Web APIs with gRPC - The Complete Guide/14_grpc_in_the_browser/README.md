## Section 14: gRPC in the Browser

#### Table of Contents
- Introduction
- Implementing gRPC in the Browser
- Configuring the Server for gRPC-Web
- Using gRPC-Web in the Browser


### Introduction

#### gRPC in the Browser
- gRPC is not supported natively from a browser
- As opposed to REST API and GraphQL
- Mainly used in native mobile apps and backend calls
- Gaps in browsers support:
  - No way to force the use of HTTP/2
  - No way of attaching gRPC-specific trailers (=footers) at the end of every request & response
  - No way to force theuse of proxy for translating from gRPC on the web to gRPC HTTP/2 responses
- There are various workarounds for this limitations
- Separated to client libraries and server implementations


### Implementing gRPC in the Browser
All implementations work in a common way:
- Add a middleman proxy between the browser and the server
- Send an HTTP/1.1 request to the proxy using a grpc-web library
- The proxy translates it to HTTP/2 request
- The proxy sends the request to the gRPC server
- The proxy returns the response

![Proxy](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/14_grpc_in_the_browser/proxy.png)


#### Limitations of gRPC-Web

gRPC supports 4 communication styles:
- Unary
- Client streaming
- Server streaming
- Bidirectional

gRPC-Web supports only the following:
- Unary
- Server streaming


#### Implementing gRPC-Web Client
- Client = Browser
- Two main implementations:
  - Google gRPC-Web Client
  - Improbable gRPC-Web client

#### Google gRPC-Web Client
- `github.com/grpc/grpc-web`
- `npm grpc-web`
- JavaScript library
- Supports Unary / Server-side streaming (payload sent as text)
- Comes with Envoy-based proxy 
- Supports any backend


#### Improbable gRPC-Web Client
- `github.com/improbable-eng/grpc-web`
- `npm @improbable-eng/grpc-web`
- TypeScript / JavaScript library
- Supports Unary / Server-side streaming
- Comes with Golang-based proxy
- Supports any backend

#### Additional Marks
- Various platforms offer with built-in support for gRPC-Web on the server
- Do not require dedicated proxy
- For example -- ASP.NET
- This is what we'll use
- We'll begin with the server


### Configuring the Server for gRPC-Web

```
dotnet add package Grpc.AspNetCore.Web
```

`grpc\groomserver\Program.cs`
```cs
using gRoom.gRPC.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
        .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<GroomService>();
app.UseCors("AllowAll");
app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
```

`grpc\groomserver\appsettings.json`
```json
{
  ...
  "Kestrel": {
    "EndpointDefaults": {
      "Protocols": "Http1AndHttp2" // modify to this
    }
  }
}
```


### Using gRPC-Web in the Browser

The grpc browser folder `grpc\grpcbrowser\`

Navigate to https://github.com/protocolbuffers/protobuf/releases/tag/v3.20.1

Download file [protoc-3.20.1-win64.zip](https://github.com/protocolbuffers/protobuf/releases/download/v3.20.1/protoc-3.20.1-win64.zip)

The protoc folder `grpc\protoc\`

Add `grpc\protoc\bin\protoc.exe` to system environment.

Command Prompt
```
protoc
```

Navigate to https://github.com/grpc/grpc-web/releases

Download file [protoc-gen-grpc-web-1.4.2-windows-x86_64.exe](https://github.com/grpc/grpc-web/releases/download/1.4.2/protoc-gen-grpc-web-1.4.2-windows-x86_64.exe)

Copy this file to the folder `grpc\protoc\bin\protoc\` and rename it to `protoc-gen-grpc-web.exe`

Navigate to https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170

Download file [vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)

Install this file.

Command Prompt
```
cd grpc/grpcbrowser
protoc groom.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
npm installv
npx webpack client.js
```

F5 to run `groomserver`

Open the `index.html` file `grpc\grpcbrowser\index.html`

![Browser](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/14_grpc_in_the_browser/browser.png)

