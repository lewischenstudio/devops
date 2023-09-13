## Section 09: Unary RPC

#### Table of Contents
- Introduction
- Implementing the Client


### Introduction

#### Unary RPC
- The classic PRC
- Works in a request / response model 
- Can be synchronous or asynchronous
- Quite easy to implement

![Unary](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/09_unary_rpc/unary.png)


### Implementing the Client

Commands to follow
```
cd project_folder\grpc
dotnet new console -o groomclient
code ./groomclient
dotnet add package Grpc.Net.Client
dotnet add package Google.Protobuf
dotnet add package Grpc.Tools
```
`project_folder\grpc\groomclient\.vscode`
Change `"console": "internalConsole"` to `"console": "externalTerminal"`

`project_folder\grpc\groomclient\Program.cs`
```cs
...
<ItemGroup>
  <Protobuf Include="Protos\groom.proto" GrpcServices="Client" />
</ItemGroup>
```