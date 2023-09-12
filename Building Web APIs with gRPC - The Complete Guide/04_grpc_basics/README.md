## Section 04: gRPC Basics

#### Table of Contents
- Problems with REST API
- History of gRPC
- gRPC Basics
- RPC
- Communication Styles
- ProtoBuf
- Advanced Topics


### Problems with REST API

#### Problems
DUring the years it was found that there are 3 major problems with REST:
- Performance
- Request-response only
- Limited Syntax

#### Performance
- REST uses text-based messaging and protocols
  - HTTP 1.1 is a text-based protocol
  - JSON is a text-based messaging format
- Two problems with text-based data exchange:
  - Large packets
  - Parsing
- Affect the performance of the API

#### Request-response only
- REST supports only the request-response pattern
- Modern web apps require more types of client-server communication
- Push notifications are becoming extremely useful
- Can be implemented using
  - Polling
  - Web sockets
- Not part of the protocol
- Complex

#### Limited Syntax
- REST was designed to run CRUD operations on entities
  - Create (POST method)
  - Read (GET method)
  - Update (PUT method)
  - Delete (DELETE method)
- Examples
  - GET /api/v1/orders/17
  - POST /api/v1/telemtry
  - PUT /api/v1/book/2
  - DELETE /api/v1/employee/84
  - GET /api/v1/flights?from=LHR&to=JFK&date=2022-08-05
- Not suited for running actions
- Examples
  - Start a new process
  - Perform login
  - Disable a device



### History of gRPC

#### History of gRPC
- Google developed a new web API standard for internal use, called Stubby
- In 2015 Google decided to build the next version of Stubby and make it open source
- It was named gPRC


#### Main principles
  - Promote messages and services, not objects and reference
  - Available on every popular platform
  - Free & open
  - Performant
  - Allows streaming


### gRPC Basics

### gRPC is
- Web API
- Based on HTTP/2
- RPC Style
- Multiple Communication Styles
- Uses Protobuf as Payload

#### Web API
- Internet HTTP
- Not necessarily request / response

#### Based on HTTP/2 
- HTTP/1.1 was released in 1997
- The internet was quite different from waht it's now
- Performance problems due to large amount of data and request/response model
- HTTP/2, released in 2015, aims to solve the problems
- HTTP/2 is
  - Fully compatible with HTTP/1.1
  - Sticks to the main components of HTTP/1.1
    - Headers, status, codes, etc
  - Main difference is the connection between client and server
    - see picture
- Note
  - Due to the complexity of HTTP/2 handling in gRPC, it can't be used from browswers
  - Used mainly from native mobile apps and in the backend
  - There is a workaround

![HTTP](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/04_grpc_basics/http.png)


#### RPC Style
- gRPC name has two parts
  - g for Google
  - RPC


### RPC

#### RPC - Remote Procedure Call
- Calling a method on the server from the client
- Refresher
  - REST works with entities, not methods
- gRPC calls the actual method
  - Example: GET /api/v1/weather?city=NYC
  - We have no idea what the method name is on the server
- RPC
  - We have to know the name of the method on the server

![RPC Method](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/04_grpc_basics/rpc_method.png)


### Communication Styles

#### Communication Styles
- gRPC supports 4 communication styles:
  - Unary
  - Client Streaming
  - Server streaming
  - Bi-directional


#### Unary
- Basically a request - response model
```
            GetWeather("NYC")
Client  ------------------------------> Server
       <------------------------------ GetWeather()
                    38
```

#### Client Streaming
- The client opens a connection to the server
- Sends continuous messages to the server
- Great for telemtry, chats, etc.
```
            StoreTelemtry("18")
Client  ------------------------------> Server
                                        StoreTelemetry()
```

#### Server streaming
- The client opens a connection to the server
- The server sends continous messages using the connection
- Great for notifications, chat, etc.
```
            New comment notification
Client  ------------------------------> Server
```


#### Bi-directional
- The client opens a connection to the server
- Both the client and the server send continous messages using the connection
- Great for telemetry, chat, real-time data, etc.
```
            Weather for NYC? Rome? London?
Client  -----------------------------------> Server
                    28, 38, 30
```


### ProtoBuf
- The data format used by gPRC
  - Theoretically gRPC can use other formats, but that doesn't happen
- A binary format
- Declares message format in a `.proto` file
- Generates client code in supported languages

#### Example
```cs
syntax="proto3";
package GRPC.Course.Employee;

option csharp_namespace="prototests";

import "google/protobuf/timestamp.proto";

message EmployeeData{
    string id=1;
    string full_name=2;
    google.protobuf.Timestamp birthdate = 3;
}
```

### Advanced Topics

#### Channels
- A definition of connection between client and server
- Specifies the host and port
- Has a state - connected, idle etc.
- Depends on the language used, channels can be queried for state
  - i.e., the `Channel.State` property in the `.NET GRPC` library


#### Timeout / Deadline
- Specify how long the client will wait to a response
  - Timeout = Duration of time the client will wait
  - Deadline = A fixed point in time until which the client will wait
- When exceeds, call is terminated and an error is returned
- Specifying timeout / deadline is language dependent


#### Metadata
- Information about a gRPC call
- For example: Authentication details
- Returned as a list of key-value pairs
- Language dependent
- i.e., `Metadata.GetAll()` method in the `.NET GRPC` library
