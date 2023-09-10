## Section 03: Web APIs

#### Table of Contents
- Web APIs
- SOAP
- REST
- GraphQL
- gRPC


### Web APIs

#### Common Characteristics of Web API
- Platform agnostic
- Standard protocols over HTTP
- Usually request / response based

#### Web API Types
Differentiated mainly by 
- Request format
- Request contents
- Response format
- Response contents

4 Main Types
- SOAP
- REST
- GraphQL
- gRPC


### SOAP

#### SOAP
- Simple Object Access Protocol
- Designed in 1998 for Microsoft
- XML-based
- RPC Style
- Extensible
- Outdated
- Do not use, unless have to

![SOAP](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/03_web_apis/soap.png)


#### REST
- Representational State Transfer
- Built around entities, not operations
- Designed in 2000 by Roy Fielding
- Built on the HTTP standard
- Message style
- Extremely simple to implement
- The most popular Web API today
- Uses URL for entity identification:
  /api/v1/order/17/items
- Usually returns JSON:
```json
  {
    "orderId": "17",
    "orderDate": "12.12.2018",
    "items": [{"id": "6"}, {"id":"56"}]
  }
```
- Very flexible
- Requires some upfront dev effort
- Requires performance optimization 
- Gains groud (ie, Github)

![REST](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/03_web_apis/rest.png)


#### GraphQL
- Developed internally in 2012 by Facebook
- Released publicly in 2015
- Enables very flexible querying, updating and subscribing to data changes
- JSON in & out

![GraphQL](https://github.com/lcycstudio/kubernetes/blob/master/Building%20Web%20APIs%20with%20gRPC%20-%20The%20Complete%20Guide/03_web_apis/graphQL.png)


#### gRPC
- What this course is about

