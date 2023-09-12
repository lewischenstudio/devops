## Section 02: API Basics

#### Table of Contents
- Read this before going through this section
- What is an API?
- API Types
- Importance of API
- Why Do You Need a Well Designed API?


### Read this before going through this section


### What is an API?

#### API - Application Programming Interface
A set of clearly defined methods of communication among various components

#### User Interface

#### Application Interface
```
GET /account HTTP/
1.1
Content
Type: application/json
Host: apigateway.us
east 1 .amazonaws.com
X
Amz Date: 20160531 T 184618 Z
Authorization: AWS
4 HMAC SHA 256 Credential={ access_key_ID }/us east
1 apigateway /aws 4 _request, SignedHeaders content type;host;x amz date ,
Signature={sig 4 _hash}
```


### API Types

#### API Types 
- Operating System
- Library
- Remote
- Web

![Operating System API](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/02_api_basics/os_api.png)

![Library API](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/02_api_basics/library_api.png)

![Remote API](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/02_api_basics/remote_api.png)

![Web API](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/02_api_basics/web_api.png)


### Importance of API

#### API is used
- By / for UI
- To extend your app's reach
- To allow monetization

#### API for the UI
- Modern apps are built for web and mobile
- Mobile apps MUST have an API on the server to communicate with it
- Web clients built using SPA also MUST have an API on the server

#### Extend your reach
- By exposing API, other apps can use your data

#### Monetize
- Charge for access for your data


### Why Do You Need a Well Designed API?
- You want developers to use your APIs
- They have alternatives to use other APIs
- Your API should be easy to use and consistent
- Well designed APIs lead to satisfied customers and less support calls

