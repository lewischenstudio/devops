## Section 06: Introducting Our App

#### Table of Contents
- Introduction
- The gRoom App


### Introduction

#### Introduction Our App
- The best way to learn something is to actually work with it
- This is what we'll do with gRPC
- We'll design and build a fully functional gRPC app, utilizing all of its major features
- Built on .NET and NodeJS


### The gRoom App
The Modern Chat Room
- A chat system with a twist
- Users can chat with each other similar to regular chat rooms
- In addition, a special bot sends news flashes to the caht rooms, making users aware of
  important events happening in the world
- A special monitoring console displays the events sent allowing admins to oversee the
  bot and users activity

#### Three main components 
- Chat room, where users can chat with each other and register for the chat room they're
  interested in
- News bot
- Admin console

#### Architecture
![Architecture](https://github.com/lcycstudio/devops/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/06_introducting_our_app/gRoom.png)



#### News Bots
- Connects to the main server
- Sends textual flash news in predefined intervals
- Uses client streaming capability of gRPC

#### User Device
- Connects to a chat room
- Participates in the chat
- Receives messages and sends messages
- Uses the bi-directional capability of gRPC

#### Admin Console
- Connects to the server
- Receives all the messages in the rooms
- Uses server streaming capability of gRPC

#### Connecting to a room
- Calling a method on the server
- Passing a room name
- Getting back a room Id to be used in subsequent calls
- Used by the end users, when joining a chat room
- Uses Unary connection
