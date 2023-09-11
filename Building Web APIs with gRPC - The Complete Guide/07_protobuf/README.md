## Section 07: Protobuf

#### Table of Contents
- Introduction
- Protobuf Usage Flow
- Messages Basic Syntax
- Configuring Protobuf in .NET
- Developing with Protobuf
- Default Values
- Working With Composite Types
- Updating a Message Type
- Oneof
- Maps
- Defining Services


### Introduction

#### Protobuf
- Short for "Protocol Buffer"
- The serialization format used by gRPC to serialize the messages between client and the server
- Not tied strictly to gRPC, can be used as a general serialization format in many other
  scenarios
- Binary format, so not human-readable
- Efficient and fast
- Compatible with most modern development platforms
- Generates client classes
- Cross-language compantibility


#### Message Formats Compaison
| **REST** | **GraphQL** | **SOAP** | **gRPC** |
|:--------:|:-----------:|:--------:|:--------:|
|   JSON   |     JSON    |    XML   | Protobuf |


#### Probuf Supported Languages
- C++
- C#
- Java
- Kotlin
- Objective-C
- PHP
- Python
- Ruby

https://developers.google.com/protocol-buffers/docs/overview



### Protobuf Usage Flow

#### Three Steps in Protobuf
- Define messages and services
- Generate code
- Use the generated code


#### Define Messages and Services
- Messages and services are defined in a `.proto` file
- A simple text file
- Can have more than one file
- Can define multiple messages and services in the same file

Syntax
```cs
message Employee{
    string id = 1;
    string full_name = 2;
    google.protobuf.Timestamp birthdate = 3;
    string address = 4;
    int32 salary = 5;
}
```

#### Generate code
- The `proto` compiler generates client code in the appropriate language
- The client code can do the following:
  - Create new messages
  - Populate messages
  - Serialize messages
  - Deserialize messages
- Generation can be done manually...
- ...or as part of the build process (our app)
- Code in one language can use message serialized by code in another language


#### Use the generated code
- The generated code is used as any other code in the language
- Allows access to the mesage's fields and to the services
- Handles serialization, deserialization and more

![Generated Code](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/07_protobuf/generated_code.png)



### Messages Basic Syntax

#### Protobuf Message Syntax
- Message defines the structure of the message sent between gRPC components (client / server)
- Defined using a message element
- Has a name formatted with CamelCase
- Contains typed fields
- Important: Specify the syntax version, should be 3

```cs
syntax="proto3"; // specifies using Protobuf v3

message Employee { // Message named Employee
    ...
}
```

#### Message Fields
- A message contains fields holding the data values of the message
- Each field has at least
  - Name
  - Data type
  - Unique identifying number
    - Used to identify the field in the message binary format
- Data types
  - Numeric (double, float, int32 and more)
  - Boolean
  - String
  - Bytes
- Not built-in data type can be imported, like date
- Naming best practices:
  - Field name contains only lower-case letters
  - When field name contains more than one word, concatenante with an underscore `_`

```cs
syntax="proto3";

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
}
```

#### Repeated Fields
- Fields can contain a list of values and not only a single one
- Indicated by the `repeated` word
```cs
syntax="proto3";

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    repeated string previous_employers=6; // repeated field
}
```


#### Field Message Type
- Other messages can be used as a field message type
- Useful when a message field should contain multiple values

```cs
syntax="proto3";

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    Address current_address=6; // Message type is Address
    repeated string previous_employers=7;
}

message Address {
    string stree_name=1;
    int32 house_number=2;
    string city=3;
    string zip_code=4;
}
```


#### Enums
- Allow defining pre-set list of values to a field
- Each value is assigned a number which is its underlying value
- MUST have first value with its underlying value equals 0
- Values should be in upper case, concatenated with underscore `_`
- After defining the enum, a field of the enum type should be defined

```cs
syntax="proto3";

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    google.protobuf.Timestamp birth_date=5;
    Address current_address=6;
    repeated string previous_employers=7;
    enum MaritalStatus {  // enum
        SINGLE=0;
        MARRIED=1;
        DIVORCED=2;
        OTHER=3
    }
    MaritalStatus marital_status=8; // Enum Field
}
```

#### Package
- Provides unique name prefix to all the messages and services in the `.proto` file
- Used to prevent name clashes between messages and services in the same project
- Optional
- Should be placed after the `syntax` declaration
```cs
syntax="proto3";

package hr.entities; // package name

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    google.protobuf.Timestamp birth_date=5;
    Address current_address=6;
    repeated string previous_employers=7;
    enum MaritalStatus {
        SINGLE=0;
        MARRIED=1;
        DIVORCED=2;
        OTHER=3
    }
    MaritalStatus marital_status=8;
}
```

#### Importing Definitions
- Other message types from other `.proto` files can be imported and used
- Extremely useful for
  - Using external types developed by 3rd party
  - Make `.proto` files modular by placing shared types in dedicated files

```cs
syntax="proto3";

package hr.entities; // package name

import "google/protobuf/timestamp.proto"; // import

message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    google.protobuf.Timestamp birth_date=5; // using imported definition
    Address current_address=6;
    repeated string previous_employers=7;
    enum MaritalStatus {
        SINGLE=0;
        MARRIED=1;
        DIVORCED=2;
        OTHER=3
    }
    MaritalStatus marital_status=8;
}
```


#### Comments
- Comments can be added to `.proto` file
  - Use `//` for a single line comments
  - Use `/*...*/` for multi-line comments

```cs
syntax="proto3";

package hr.entities; // package name

import "google/protobuf/timestamp.proto"; // import

/* Represents the Employee entity, with a list of previous employers.
Also, this definition contains the current address of the employee. */
message Employee {
    int32 id=1;
    string first_name=2;
    string last_name=3;
    bool is_retired=4;
    int32 age=5;
    google.protobuf.Timestamp birth_date=5; // using imported definition
    Address current_address=6;
    repeated string previous_employers=7; // Leave empty if unknown
    enum MaritalStatus {
        SINGLE=0;
        MARRIED=1;
        DIVORCED=2;
        OTHER=3
    }
    MaritalStatus marital_status=8;
}
```



### Configuring Protobuf in .NET

`project_folder\grpc\protobuf`
```prompt
dotnet new console
```

`project_folder\grpc\protobuf\protos/employee.proto`

Install the extension: "vscode-proto3"


### Developing with Protobuf
```
dotnet add package Google.Protobuf
dotnet add package Grpc.Tools
```

`project_folder\grpc\protobuf\protobuf.csproj`
```
<ItemGroup>
  <Protobuf Include="protos\employee.proto"/>
</ItemGroup>
```


### Default Values

| **Field Type** | **Default Value**               |
|----------------|---------------------------------|
| String         | Empty string                    |
| Boolean        | false                           |
| Numeric types  | Zero                            |
| Enums          | The first defined enum value, 0 |
| Bytes          | Empty bytes                     |

There is no way to find out if a value is default or assigned


### Working With Composite Types
```cs
// Working With Composite Types -> Add an address
emp.CurrentAddress = new Address();
emp.CurrentAddress.City = "New York";
emp.CurrentAddress.StreetName = "5th Avenue";
emp.CurrentAddress.HouseNumber = 42;
```

### Updating a Message Type
- Naturally, messages will be modified during the system's lifetime
- Generally, changes can be made to messages but it's important to follow the rules
  to make sure old code will be able to work with new messages and vice versa
- Rule #1:
  - Don't change field numbers
  - These numbers are used to identify the fields in the serialized message and
    changing them will mess things up
- Rule #2:
  - If you add new fields, messages serialized by code based on old message type will work
  - New fields will get their default values
- Rule #3:
  - Fields can be removed
  - Do not reuse removed fields numbers
- Rule #4:
  - When changing field type, note that:
    - Most numeric types are compatible
    - You can change from int32 to int64 to bool to unit32 etc.
    - String and bool are compatible if bytes are valid UTF-8


### Oneof
- When a message has a lot of fields, and you need only one field to have a value,
  you can use the `oneof` keyword
- Using `oneof`, only a single field can have a value
- The latest field to be set a value is the one with the value, all the others are empty
- All `oneof` fields share memory to save resources

```cs
message Employee {
  ...
  oneof birth_data {
    google.protobuf.Timestamp birth_date=5;
    int32 age=9;
  }
}
```


### Maps
- Maps can be defined as a specialized field in a message
- Map = Hashtable = Dictionary
- Keys must be unique or parsing will fail
- Keys can be integral or string

`project_folder\grpc\protobuf\Program.cs`
```cs
message Employee {
  ...
  map<string, string> relatives=10;
}
```

`project_folder\grpc\protobuf\protos\employee.proto`
```cs
emp.Relatives.Add("father", "John");
emp.Relatives.Add("mother", "Hannah");
emp.Relatives.Add("borther", "Dirk");
```


### Defining Services
- Protobuf is used also for defining services - or API endpoints - to be generated
- Usually done with gRPC
- Definition is straightforward - service name, incoming parameter, outgoing value

`project_folder\grpc\protobuf\Program.cs`
```cs
message EmployeeId {
  int32 id=1;
}

service EmployeeService {
  rpc GetEmployee(EmployeeId) return (Employee);
}
```