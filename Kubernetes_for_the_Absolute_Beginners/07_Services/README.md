## Section 07: Services

#### Table of Contents
- Services - NodePort
- Demo - Services
- Services - ClusterIP
- Services - Load Balancer
- Hands-On Labs
- Solution - Services
- Coding Exercise: Services - 1
- Coding Exercise: Services - 2
- Coding Exercise: Services - 3
- Coding Exercise: Services - 4
- Coding Exercise: Services - 5
- Coding Exercise: Services - 6
- Coding Exercise: Services - 7
- Coding Exercise: Services - 8


### Services - NodePort
Kubernetes Services enable communication between various components within and outside of the application.
Each Node has its own port called NodePort, allowing external IP clients to talk to the Node. 
Each Service has its own port called Port, acting as the front portal from outside the POD to into the POD.
Each POD has its own port called TargetPort, allowing requests from the Service Port. 
NodePort has a range from 30000 to 32767.

#### NodePort YAML
`service-definition.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: NodePort
  ports:
    - targetPort: 80
      port: 80
      nodePort: 30008
```

#### Commands
```
kubectl create -f service-definition.yml
```
```
kubectl get svc
```
```
minikube service myapp-service --url
```


### Demo - Services
Check the file `demo_service.yaml` and use the commands above in the terminal.


### Services - ClusterIP
A kubernetes service can help us group these PODs together and provide a single interface to access the PODs
in a group. For example a service created for the backend PODs will help group all the backend PODs together 
and provide a single interface for other PODs to access this service.

#### ClusterIP YAML
`service-definition.yml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: back-end
spec:
  type: ClusterIP
  ports:
    - targetPort: 80
      port: 80
  selector:
    app: myapp
    type: back-end
```


### Services - Load Balancer

Developers need to set up a separate Load Balancer VM in the production environment for end users to access
our applications. We should configure it to forward requests from end users to any of the IPs of the Kubernetes
nodes. We then configure the organization's DNS to point to this load balancer when a user visits http://myapp.com.

#### Load Balancer YAML
`service-definition.yml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  ports:
    - targetPort: 80
      port: 80
      nodePort: 30009
```


### Hands-On Labs

#### Question 1. How many Services exist on the system?
**1**
```
kubectl get service
```

#### Question 2. That is a default service created by Kubernetes at launch.

#### Question 3. What is the type of the default kubernetes service?
**ClusterIP**

#### Question 4. What is the targetPort configured on the kubernetes service?
**6443**
```
kubectl describe service kubernetes
```

#### Question 5. How many labels are configured on the kubernetes service?
**2**
```
Labels:            component=apiserver
                   provider=kubernetes
```

#### Question 6. How many Endpoints are attached on the kubernetes service?
**1**
```
Endpoints:         192.33.82.9:6443
```

#### Question 7. How many Deployments exist on the system now?
**1**
```
kubectl get deployment 
```

#### Question 8. What is the image used to create the pods in the deployment?
**kodekloud/simple-webapp:red**
```
kubectl describe deployment simple-webapp-deployment
```

#### Question 9. Are you able to accesss the Web App UI?
Try to access the Web Application UI using the tab simple-webapp-ui above the terminal.


#### Question 10. Create a new service to access the web application using the service-definition-1.yaml file.
```yaml
Name: webapp-service
Type: NodePort
targetPort: 8080
port: 8080
nodePort: 30080
selector:
  name: simple-webapp
```
```
vi service-definition-1.yaml
```
`service-definition-1.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: webapp-service
  namespace: default
spec:
  ports:
    - nodePort: 30080
      port: 8080
      targetPort: 8080
  selector:
    name: simple-webapp
  type: NodePort
```
```
kubectl create -f service-definition-1.yaml
```

#### Question 11. Are you able to accesss the Web App UI?


### Solution - Services


### Coding Exercise: Services - 1
**Introduction:** Let us start with Services! Given a service-definition.yml file. We are only getting started 
with it, so let's get it populated. 

**Instruction:** Add all the root level properties to it. 

**Note:** Only add the properties, not any values.


### Coding Exercise: Services - 2
**Introduction:** Let us now add values for Service. Service is under apiVersion v1 

**Instruction:** Update values for apiVersion and kind


### Coding Exercise: Services - 3
**Introduction:** Let us now add values for metadata. 

**Instruction:** Add a name for the service = frontend and a label = app=>myapp


### Coding Exercise: Services - 4
**Introduction:** Let us now add values for spec section. The spec section for Services have type, selector 
and ports. 

**Instruction:** Add properties under spec section - type, selector and ports. Do not add any values for them.


### Coding Exercise: Services - 5
**Introduction:** Let us now add values for ports. Ports is an Array/ List. Each item in the list has a set of properties - port and targetPort 

**Instruction:** Create an Array/List item under ports. Add a dictionary with properties port and targetPort. 
Set values for both to port 80. 

**Note:** We will not be providing a NodePort as we would like Kubernetes to assign one automatically for us.


### Coding Exercise: Services - 6
**Introduction:** Let us now add values for type. Since we are creating a frontend service for enabling 
external access to users, we will set it to NodePort. 

**Instruction:** Set value for type to NodePort.

### Coding Exercise: Services - 7
**Introduction:** Let us now add values for selector. We need to link the Service to the PODs created by 
the deployment. 

**Instruction:** Given the deployment-definition.yml file we created in the previous Section. Copy the appropriate labels and paste it under selector section of service-definition.yml file.


### Coding Exercise: Services - 8
**Introduction:** Let us now try to create a service-definition.yml file from scratch. This time all in one 
go. You are tasked to create a service to enable the frontend pods to access a backend set of Pods. 

**Instruction:** Use the information provided in the below table to create a backend service definition file.
Refer to the provided deployment-definition file for information regarding the PODs. 
```yaml
Service Name: image-processing 
labels: app=> myapp 
type: ClusterIP 
Port on the service: 80 
Port exposed by image processing container: 8080
```
`deployment-definition.yml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: image-processing-deployment
  labels:
    tier: backend
spec:
  replicas: 4
  template:
    metadata:
      name: image-processing-pod
      labels:
        tier: backend
    spec:
      containers:
        - name: mycustom-image-processing
          image: someorg/mycustom-image-processing
  selector:
    matchLabels:
      tier: backend
```