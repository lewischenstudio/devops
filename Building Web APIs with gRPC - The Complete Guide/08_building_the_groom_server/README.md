## Section 08: Building the gRoom Server

#### Table of Contents
- Introduction
- Creating and Configuring the Project
- Building the gRoom Service
- Testing the Service with BloomRPC



### Introduction

#### gRoom Server
- The gRoom server holds the services used by the various clients
- It needs to expose the services requried for
  - Registering to a room
  - Streaming client messages from the newschat
  - Streaming server messages to the admin console
  - Sending and receiving messages to chat room

#### Architecture
![Architecture](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/06_introducting_our_app/gRoom.png)


### Creating and Configuring the Project
Under the folder `project_folder\grpc`, type the command below to create the project `gRoom`
```
dotnet new grpc -o groomserver
```
`-o` indicates the name of the folder to store the output 



### Building the gRoom Service

Check the server on the terminal and open the browser and navigate to this URL
```
Microsoft.Hosting.Lifetime: Information: Now listening on: http://localhost:5147
```

### Testing the Service with BloomRPC

Go to https://github.com/bloomrpc/bloomrpc/releases and download `bloomrpc`

Steps
- Run the downloaded file
- Modify the URL to 0.0.0.0:5147
- Click the "+" icon to import our the proto file `project_folder\grpc\groomserver\Protos\groom.proto`
- Click on the method `RegisterToRoom`
- Change the value of `"room_name"` to "Cars"
- Click the play button 
- Observe the response to display a random number `{ "room_id": 56 }`

![Architecture](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/08_building_the_groom_server/bloolm_rpc.png)



