## Section 08: Microservices Architecture

#### Table of Contents
- Microservices Application
- Microservices Application on Kubernetes
- Demo - Deploying Microservices Application on Kubernetes
- Demo - Deploying Microservices Application on Kubernetes with Deployments
- Article: Demo lecture manifest files



### Microservices Application

![Microservices Sample Application](https://github.com/lcycstudio/kubernetes/blob/master/Kubernetes%20for%20the%20Absolute%20Beginners%20-%20Hands-on/08_Microservices_Architecture/microservices.png)

#### Redis (6379)
```
docker run -d --name=redis redis
```
#### PostgreSQL (5432)
```
docker run -d --name=db postgres:9.4
```
#### Voting App (Python)
```
docker run -d --name=vote -p 5000:80 --link redis:redis voting-app
```
#### Result App (Node.js)
```
docker run -d --name=result -p 5001:80 --link db:db result-app
```
#### Worker App
```
docker run -d --name=worker --link db:db --link redis:redis worker
```


### Microservices Application on Kubernetes

#### Goals
1. Deploy containers
2. Enable connectivity
3. External Access

#### Steps
1. Deploy PODs
2. Create Services (ClusterIP)
   1. redis
   2. db
3. Create Services (NodePort)
   1. voting-app
   2. result-app


#### Redis
- Accessed by the `voting-app` and `worker app`
- The voting app saves the vote to Redis
- The worker app reads from Redis and saves to database
- Accessed by users to do POST requests to Redis

#### PostgreSQL
- Accessed by the `worker app` and update the total count of votes
- Accessed by the `result app` to read the total count of votes
- Accessed by users to do GET requests to the database

#### Worker App
- It is accessing `redis` and `postgres`
- No other app is accessing it
- It reads the count of votes from `redis` and updates the `postgres`

#### Service (ClusterIP)
A service can be used to expose an application to other applications or users for external access.
- Create a service for `redis`, called `redis service`, so that it can be accessed by the `voting app` and 
the `worker app`.
- Create a service for `postgres`, called `db service`, so that the postgres database can be accessed
by the `result app` and the `worker app`. Username and password must be provided to access `postgres`.


#### Services (NodePort)
We create services for the `voting-app` and the `result-app` and set their type to `nodePort`.


### Demo - Deploying Microservices Application on Kubernetes

Check the files inside `voting-app` folder and run the commands below on your terminal

```
kubectl get pods
kubectl get svc
kubectl create -f voting-app-pod.yaml
kubectl create -f voting-app-service.yaml
kubectl get pods,svc
minikube service voting-service --url
http://192.168.1.1:30004
curl http://192.168.1.1:30004
kubectl create -f redis-pod.yaml
kubectl create -f redis-service.yaml
kubectl get pods,svc
kubectl create -f postgres-pod.yaml
kubectl create -f postgres-service.yaml
kubectl get pods,svc
kubectl create -f worker-app-pod.yaml
kubectl create -f result-app-pod.yaml
kubectl create -f result-app-service.yaml
kubectl get pods,svc
minikube service result-service --url
http://192.168.1.1:30005
curl http://192.168.1.1:30005
```

Open the web browser on your computer and navigate to the following URLs
- http://192.168.1.1:30004
- http://192.168.1.1:30005



### Demo - Deploying Microservices Application on Kubernetes with Deployments


![Microservices Sample Application](https://github.com/lcycstudio/kubernetes/blob/master/Kubernetes%20for%20the%20Absolute%20Beginners%20-%20Hands-on/08_Microservices_Architecture/deployment.png)


Check the files inside `voting-app` folder and run the commands below on your terminal

```
kubectl get pods
kubectl get svc
ls
kubectl create -f voting-app-deploy.yaml
kubectl create -f voting-app-service.yaml
kubectl get deployment,pods,svc
kubectl create -f redis-deploy.yaml
kubectl create -f redis-service.yaml
kubectl get deployment,pods,svc
kubectl create -f postgres-deploy.yaml
kubectl create -f postgres-service.yaml
kubectl get deployment,pods,svc
kubectl create -f worker-app-deploy.yaml
kubectl create -f result-app-deploy.yaml
kubectl create -f result-app-service.yaml
kubectl get deployment,pods,svc
minikube service voting-service --url
http://192.168.1.1:30004
curl http://192.168.1.1:30004
minikube service result-service --url
http://192.168.1.1:30005
curl http://192.168.1.1:30005
```

#### Scale Up 
```
kubectl scale deployment voting-app-deploy --replicas=3
kubectl get deployment voting-app-deploy
```


### Article: Demo lecture manifest files

[Demo lecture manifest files](https://github.com/kodekloudhub/example-voting-app-kubernetes)




