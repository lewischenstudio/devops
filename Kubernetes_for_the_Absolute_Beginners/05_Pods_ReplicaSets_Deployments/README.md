## Section 05: Kubernets Concepts: Pods ReplicaSets Deployments

#### Table of Contents
- Pods with YAML
- Demo - Pods with YAML
- Tips & Tricks - Developing Kubernetes Manifest files with Visual Studio Code
- Hands-On Labs - Familiarise with the lab environment
- Hands-On Labs - PODs with YAML
- Solution : Pods with YAML Lab
- Replication Controllers and ReplicaSets
- Demo - ReplicaSets
- Hands-On Labs - Replica Sets
- Solution - ReplicaSets
- Deployments
- Demo - Deployments
- Hands-On Labs - Deployments
- Solution - Deployments
- Deployments - Update and Rollback
- Demo - Deployments - Update and Rollback
- Hands-On Lab: Practice Test Rolling Updates and Rollbacks
- Solution - Rolling Updates and Rollbacks
- Coding Exercise: Pods - 1
- Coding Exercise: Pods - 2
- Coding Exercise: Pods - 3
- Coding Exercise: Pods - 4
- Coding Exercise: Pods - 5
- Coding Exercise: Pods - 6
- Coding Exercise: Pods - 7
- Coding Exercise: Pods - 8
- Coding Exercise: Pods - 9
- Coding Exercise: ReplicaSet - 1
- Coding Exercise: ReplicaSet - 2
- Coding Exercise: ReplicaSet - 3
- Coding Exercise: ReplicaSet - 4
- Coding Exercise: ReplicaSet - 5
- Coding Exercise: ReplicaSet - 6
- Coding Exercise: ReplicaSet - 7
- Coding Exercise: Deployment - 1
- Coding Exercise: Deployment - 2
- Coding Exercise: Deployment - 3
- Coding Exercise: Deployment - 4
- Coding Exercise: Deployment - 5
- Coding Exercise: Deployment - 6
- Coding Exercise: Deployment - 7### Pods with YAML

#### YAML in Kubernetes
`pod-definition.yml`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    type: front-end
spec:
  containers:
    - name: nginx-container
      image: nginx
```

| **Kind**   | **Version** |
|------------|-------------|
| POD        | v1          |
| Service    | v1          |
| ReplicaSet | apps/v1     |
| Deployment | apps/v1     |

#### Kubectl Commands
```
kubectl create -f pod-definition.yml
kubectl get pods
kubectl describe pod myapp-pod
```


### Demo - Pods with YAML

Check the file `demo_pod.yaml` and use the commands above in the terminal.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
    tier: frontend
spec:
  containers:
    - name: nginx-container
      image: nginx
```

#### Kubectl Commands
```
kubectl apply -f pod.yaml
kubectl get pods
kubectl describe pod nginx
```


### Tips & Tricks - Developing Kubernetes Manifest files with Visual Studio Code

IDE: [Visual Studio Code](https://code.visualstudio.com/)

Install extension: YAML -> Extension Settings -> Yaml: Schemas -> Edit in `settings.json`

Alternative: Ctrl + P -> Type "settings.json" 

```json
{
  "yaml.schemas": {
    "kubernetes": "*.yaml"
  }
}
```


### Hands-On Labs - Familiarise with the lab environment
[Lab environment](https://uklabs.kodekloud.com/topic/labs-familiarize-with-lab-environment-2/)

#### Question 1. How many nodes are part of the cluster?
**1**
```
kubectl get nodes
```

#### Question 2. What is the version of Kubernetes running on the nodes ?
**ksxs--**
```
kubectl version --short
```

#### Question 3: What is the flavor and version of Operating System on which the Kubernetes nodes are running?
**ALPINE LINUX**
```
kubectl get nodes -o wide
```


### Hands-On Labs - PODs with YAML

#### Question 1. How many pods exist on the system?
**NONE**
```
kubectl get nodes
```

#### Question 2. Create a new pod with the nginx image.
```
kubectl run nginx --image=nginx
```

#### Question 3. How many pods are created now?
**4**
```
kubectl get pods
```

#### Question 4. What is the image used to create the new pods?
**BUSYBOX**
```
kubectl describe pods
```

#### Question 5. Which nodes are these pods placed on?
**CONTROLPLANE**
```
kubectl describe pods
```

#### Question 6. How many containers are part of the pod webapp?
**2**
```
kubectl describe pod webapp
```

#### Question 7. What images are used in the new webapp pod?
**nginx & agentx**
```
kubectl describe pod webapp
```

#### Question 8. What is the state of the container agentx in the pod webapp?
**Error or Waiting**
```
kubectl describe pod webapp
```

#### Question 9. Why do you think the container agentx in pod webapp is in error?
**A Docker image with this name doesn't exist on Docker Hub**
```
kubectl describe pod webapp
```

#### Question 10. What does the READY column in the output of the kubectl get pods command indicate?
**Running Containers in POD/Total Containers in POD**
```
kubectl get pods
```

#### Question 11. Delete the webapp Pod.
```
kubectl delete pod webapp
```

#### Question 12. Create a new pod with the name redis and the image redis123.
We use kubectl run command with `--dry-run=client -o yaml` option to create a manifest file
```
kubectl run redis --image=redis123 --dry-run=client -o yaml > redis-definition.yaml
```
After that, using `kubectl create -f` command to create a resource from the manifest file
```
kubectl create -f redis-definition.yaml 
```
Verify the work by running `kubectl get` command
```
kubectl get pods
```

#### Question 13. Now change the image on this pod to redis.
Option 1: Use the `kubectl edit` command to update the image of the pod to `redis`.
```
kubectl edit pod redis
```
Option 2: If you used a `pod` definition file then update the image from `redis123` to `redis` in 
`redis-definition.yaml`
```
vi redis-definition.yaml
```
Run `kubectl apply` command to update the image
```
kubectl apply -f redis-definition.yaml 
```
Verify the work by running `kubectl get` command
```
kubectl get pods
```

### Solution : Pods with YAML Lab

### Replication Controllers and ReplicaSets

Kubernetes Controllers are the brain behind Kubernetes. They are processes that monitor kubernetes objects and
respond accordingly. If we have more than one instance or POD running at the same time, then when our application
crashes and the POD fails, we still have our application running on the other one. The replication controller helps
us run multiple instances of a single POD in the kubernetes cluster thus providing **High Availability**. The
replication controller ensures that the specified number of PODs are running at all times.

We also need replication controller is to create multiple PODs to share the load across them. The replication
controller spans across multiple nodes in the cluster. It helps us balance the load across multiple pods on
different nodes as well as scale our application when the demand increases.

**Replica Set** is the new recommanded way to do Replication Controller.

Replication controller definition YAML file `rc-definition.yml`
```yaml
apiVersion: v1
kind ReplicationController
metadata:
  name: myapp-rc
  labels: 
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
        type: front-end
    spec:
      containers:
        - name: nginx-container
          image: nginx
replicas: 3
```
Pod definition YAML file `pod-definition.yml`
```yaml
apiVersion: 1
kind: Pod
```
Commands to run replication controller
```
kubectl create -f rc-definition.yml
kubectl get replicationcontroller
kubectl get pods
```

Replication Set definition YAML file `replicaset-definition.yml`
```yaml
apiVersion: apps/v1
kind ReplicaSet
metadata:
  name: myapp-replicaset
  labels: 
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
        type: front-end
    spec:
      containers:
        - name: nginx-container
          image: nginx
replicas: 3
selector:
  matchLabels:
    type: front-end
```
Pod definition YAML file `pod-definition.yml`
```yaml
apiVersion: 1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    tier: front-end
```
Commands to run replicaset
```
kubectl create -f replicaset-definition.yml
kubectl get replicaset
kubectl get pods
```

#### Labels and Selectors
Replicaset uses `matchLabels` to monitor the pods with the same `labels`.

#### Scale
Option 1: Update `replicas: 6` and then run the command
```
kubectl replace -f replicaset-definition.yml
```
Option 2: Run the command directly
```
kubectl scale --replicas=6 -f replicaset-definition.yml
```

#### Commands
```
kubectl create -f replicaset-definition.yml
```
```
kubectl get replicaset
```
```
kubectl delete replicaset myapp-replicaset
```
```
kubectl replace -f replicaset-definition.yml
```
```
kubectl scale --replicas=6 -f replicaset-definition.yml
```

The delete command also deletes all underlying PODs.



### Demo - ReplicaSets

Check the file `demo_replicaset.yaml` and use the commands above in the terminal.


### Hands-On Labs - Replica Sets

#### Question 1. How many PODs exist on the system?
**0**
```
kubectl get pods
```

#### Question 2. How many ReplicaSets exist on the system?
**0**
```
kubectl get replicaset
```

#### Question 3. How about now? How many ReplicaSets do you see?
**1**
```
kubectl get replicaset
```

#### Question 4. How many PODs are DESIRED in the new-replica-set?
**4**
```
kubectl get replicaset
```

#### Question 5. What is the image used to create the pods in the new-replica-set?
**BUSYBOX777**
```
kubectl describe replicaset new-replica-set
```

#### Question 6. How many PODs are READY in the new-replica-set?
**0**
```
kubectl get pods
```

#### Question 7. Why do you think the PODs are not ready?
**The image BUSYBOX777 doesn't exist**


#### Question 8. Delete any one of the 4 PODs.
```
kubectl delete pod new-replica-set-9lcz2
```

#### Question 9. How many PODs exist now?
**4**
```
kubectl get pods
```

#### Question 10. Why are there still 4 PODs, even after you deleted one?
**ReplicaSet ensures that desired number of PODs always run**


#### Question 11. Create a ReplicaSet using the replicaset-definition-1.yaml file located at /root/.
```
kubectl explain replicaset | grep VERSION
vi replicaset-definition-1.yaml
kubectl create -f /root/replicaset-definition-1.yaml
```

#### Question 12. Fix the issue in the replicaset-definition-2.yaml file and create a ReplicaSet using it.
Change `tier: nginx` to `tier: frontend` under `metadata.labels`
```
vi replicaset-definition-2.yaml
kubectl create -f /root/replicaset-definition-2.yaml
```

#### Question 13. Delete the two newly created ReplicaSets - replicaset-1 and replicaset-2
```
kubectl delete replicaset replicaset-1
kubectl delete replicaset replicaset-2
```

#### Question 14. Fix the original replica set new-replica-set to use the correct busybox image.
Either delete and recreate the ReplicaSet or Update the existing ReplicaSet and then delete all PODs, 
so new ones with the correct image will be created.

Update the existing Replicaset and then delete all PODs
```
kubectl edit replicaset new-replica-set
kubectl get pods
kubectl delete pod new-replica-set-6pg5b
kubectl delete pod new-replica-set-lrgbv
kubectl delete pod new-replica-set-wl4j5
kubectl delete pod new-replica-set-tmskf
kubectl get pods
```

#### Question 15. Scale the ReplicaSet to 5 PODs.
Use `kubectl scale` command or edit the replicaset using `kubectl edit` replicaset.
```
kubectl scale replicaset new-replica-set --replicas=5
```

#### Question 16. Now scale the ReplicaSet down to 2 PODs.
Use the `kubectl scale` command or edit the replicaset using `kubectl edit` replicaset.
```
kubectl scale replicaset new-replica-set --replicas=2
```

### Solution - ReplicaSets

### Deployments

A web server running in a production environment needs many instances (PODs) of the web server running concurrently.
When developers upgrade applications to newer versions, we want to upgrade production instances one after another.
This kind of upgrade is known as Rolling Upgrades. When there is an error in one of the upgrades, we want to roll 
back the changes to the previous versions. Whenever we want to make any changes to the web server in the production
environment, they would like to apply a pause to the environment, make the changes, and then resume the server so 
that all changes are roll-out together. 

All of these capabilities are available with the kubernetes Deployments. The deployment provides us with capabilities 
to upgrade the underlying instances seamlessly using rolling updates, undo changes, and pause and resume changes to 
deployments.

#### Commands
```
kubectl create -f deployment-definition.yaml
```
```
kubectl get deployments
```
```
kubectl get replicaset
```
```
kubectl get pods
```
```
kubectl get all
```



### Demo - Deployments

Check the file `demo_deployment.yaml` and use the commands above in the terminal.



### Hands-On Labs - Deployments


#### Question 1. How many PODs exist on the system?
**0**
```
kubectl get pods
```

#### Question 2. How many ReplicaSets exist on the system?
**0**
```
kubectl get replicaset
```

#### Question 3. How many Deployments exist on the system?
**0**
```
kubectl get deployment
```

#### Question 4. How many Deployments exist on the system now?
**1**
```
kubectl get deployment
```

#### Question 5. How many ReplicaSets exist on the system now?
**1**
```
kubectl get replicaset
```

#### Question 6. How many PODs exist on the system now?
**4**
```
kubectl get pods
```

#### Question 7. Out of all the existing PODs, how many are ready?
**0**

#### Question 8. What is the image used to create the pods in the new deployment?
**BUSYBOX888**
```
kubectl describe replicaset frontend-deployment-577494fd6f
```

#### Question 9. Why do you think the deployment is not ready?
**The image BUSYBOX888 doesn't exist**
```
kubectl describe pods frontend-deployment-577494fd6f-gvk5n
```

#### Question 10. Create a new Deployment using the deployment-definition-1.yaml file located at /root/.
Run the command: `kubectl explain deployment | head -n1` and correct the value of `kind`.
```
kubectl explain deployment | head -n1
vi deployment-definition-1.yaml
kubectl create -f /root/deployment-definition-1.yaml
```


#### Question 11. Create a new Deployment with the below attributes using your own deployment definition file.
```yaml
Name: httpd-frontend;
Replicas: 3;
Image: httpd:2.4-alpine
```

```
vi deployment-definition-2.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpd-frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      name: busybox-pod
  template:
    metadata:
      labels:
        name: busybox-pod
    spec:
      containers:
      - name: busybox-container
        image: httpd:2.4-alpine
        command:
        - sh
        - "-c"
        - echo Hello Kubernetes! && sleep 3600
```
```
kubectl create -f /root/deployment-definition-2.yaml
```


### Solution - Deployments


### Deployments - Update and Rollback

Whenever we create a new deployment or upgrade the images in an existing deployment it triggers a Rollout. 
A rollout is the process of gradually deploying or upgrading our application containers.

#### Rollout Command
```
kubectl rollout status deployment/myapp-deployment
```

#### Deployment Strategy
- Recreate: destroy the 5 running instances and then deploy 5 new instances
- Rolling Update: take down the older version and bring up the newer version one by one
- Rolling Update is the default deployment strategy

#### Commands
Kubectl Create
```
kubectl create -f deployment-definition.yml
```

Kubectl Get
```
kubectl get deployments
```

Kubectl Apply
```
kubectl apply -f deployment-definition.yml
```
```
kubectl set image deployment/myapp-deployment nginx=nginx:1.9.1
```

Kubectl Status
```
kubectl rollout status deployment/myapp-deployment
```
```
kubectl rollout history deployment/myapp-deployment
```

Kubectl Rollback
```
kubectl rollout undo deployment/myapp-deployment
```


### Demo - Deployments - Update and Rollback

Check the file `demo_deployment.yaml` and use the commands above in the terminal.

Kubectl Create & Record
```
kubectl create -f deployment-definition.yml --record
```


### Hands-On Lab: Practice Test Rolling Updates and Rollbacks

#### Question 1. We have deployed a simple web application. Inspect the PODs and the Services

#### Question 2. What is the current color of the web application?
**blue**

#### Question 3. Run the script named curl-test.sh to send multiple requests to test the web application. 
Take a note of the output.
`Hello, Application Version: v1 ; Color: blue OK`

#### Question 4. Inspect the deployment and identify the number of PODs deployed by it
**4**
```
kubectl get pods
```

#### Question 5. What container image is used to deploy the applications?
**kodekloud/webapp-color:v1**
```
kubectl describe pod frontend-58f7796bbb-m94zz
```

#### Question 6. Inspect the deployment and identify the current strategy
`StrategyType: RollingUpdate`
```
kubectl describe deployment
```

#### Question 7. If you were to upgrade the application now what would happen?
**PODs are upgraded few at a time**

#### Question 8. Let us try that. Upgrade the application by setting the image on the deployment to kodekloud/webapp-color:v2

Do not delete and re-create the deployment. Only set the new image name for the existing deployment.
```
kubectl edit deployment frontend
kubectl get pods
kubectl rollout status deployment/frontend
kubectl rollout history deployment/frontend
```

#### Question 9. Run the script curl-test.sh again. 
Notice the requests now hit both the old and newer versions. However none of them fail.

Execute the script at `/root/curl-test.sh`.
`Hello, Application Version: v2 ; Color: green OK`


#### Question 10. Up to how many PODs can be down for upgrade at a time
**1**
```
kubectl get pods
```

#### Question 11. Change the deployment strategy to Recreate

Delete and re-create the deployment if necessary. Only update the strategy type for the existing deployment.

Run the command `kubectl edit deployment frontend` and modify the required field. Make sure to **delete the properties of rollingUpdate as well**, set at strategy.rollingUpdate.

#### Question 12. Upgrade the application by setting the image on the deployment to kodekloud/webapp-color:v3

Do not delete and re-create the deployment. Only set the new image name for the existing deployment.
```
kubectl edit deployment frontend
kubectl rollout status deployment/frontend
kubectl rollout history deployment/frontend
```

#### Question 13. Run the script curl-test.sh again. Notice the failures. Wait for the new application to be ready. Notice that the requests now do not hit both the versions

Execute the script at `/root/curl-test.sh`
`Hello, Application Version: v3 ; Color: red OK`

`curl-test.sh`
```sh
for i in {1..35}; do
   kubectl exec --namespace=kube-public curl -- sh -c 'test=`wget -qO- -T 2  http://webapp-service.default.svc.cluster.local:8080/info 2>&1` && echo "$test OK" || echo "Failed"';
   echo ""
done
```


### Solution - Rolling Updates and Rollbacks


### Coding Exercise: Pods - 1
**Introduction:** Let us start simple! Given a .`pod-definitionyml` file. We are only getting started with it. 
I have added two root level properties - apiVersion and kind. 

**Instruction:** Add the missing two properties: 
**metadata** and **spec**.


### Coding Exercise: Pods - 2
**Introduction:** Let us now populate values for each property. Start with **apiVersion**. 

**Instruction:** Update value of **apiVersion** to **v1**. Remember to add a space between colon (:) and the value (v1)


### Coding Exercise: Pods - 3
**Instruction:** Update value of **kind** to **Pod**.


### Coding Exercise: Pods - 4
**Introduction:** Let us now get to the metadata section. 

**Instruction:** Add a property "**name**" under metadata with value "**myapp-pod**". Remember to add a space before
'name' to make it a child of metadata.


### Coding Exercise: Pods - 5
**Introduction:** Let us add some labels to our Pod 

**Instruction:** Add a property "**labels**" under metadata with a child property "**app**" with a value "**myapp**".
Remember to have equal number of spaces before "name" and "labels" so they are siblings


### Coding Exercise: Pods - 6
**Introduction:** We now need to provide information regarding the docker image we plan to use. 

**Instruction:** Add a property **containers** under **spec** section. Do not add anything under it yet.


### Coding Exercise: Pods - 7
**Instruction:** Containers is an array/list. So create the **first element/item** in the array/list and add the 
following properties to it: **name - nginx** and **image - nginx**


### Coding Exercise: Pods - 8
**Introduction:** Perfect! You have successfully created a Kubernetes-Definition file. Let us try it one more time, this time all on your own! 

**Instruction:** Create a Kubernetes Pod definition file using values below: 

**Name**: postgres 
**Labels**: tier => db-tier
**Container name**: postgres
**Image**: postgres


### Coding Exercise: Pods - 9
**Introduction:** Postgres Docker image requires an environment variable to be set for password.  

**Instruction:** Set an environment variable for the docker container. **POSTGRES_PASSWORD** with a value 
**mysecretpassword**. I know we haven't discussed this in the lecture, but it is easy. To pass in an environment
variable add a new property '**env**' to the container object. It is a sibling of image and name. **env** is an
array/list. So add a new item under it. The item will have properties **name** and **value**. name should be the
name of the environment variable - **POSTGRES_PASSWORD**. And **value** should be the password - **mysecretpassword**


### Coding Exercise: ReplicaSet - 1
**Introduction:** Let us start with ReplicaSets! Given a blank replicaset-definition.yml file. We are only getting
started with it, so let's get it populated. 

**Instruction:** Add all the root level properties to it. 

**Note:** Only add the properties, not any values yet.


### Coding Exercise: ReplicaSet - 2
**Introduction:** Let us now add values for ReplicaSet. ReplicaSet is under apiVersion - apps/v1 

**Instruction:** Update values for apiVersion and kind


### Coding Exercise: ReplicaSet - 3
**Introduction:** Let us now add values for metadata 

**Instruction:** Name the ReplicaSet - frontend. And add labels app=>mywebsite and tier=> frontend


### Coding Exercise: ReplicaSet - 4
**Introduction:** Let us now get to the specification 

**Instruction:** The spec section for ReplicaSet has 3 fields: replicas, template and selector. Simply add these
properties. Do not add any values yet.


### Coding Exercise: ReplicaSet - 5
**Instruction:** Let us update the number of replicas to 4.


### Coding Exercise: ReplicaSet - 6
**Introduction:** The template section expects a Pod definition. Luckily, we have the one we created in the previous
set of exercises. Next to the replicaset-definition.yml you will now find the same pod-definition.yml file that
you created before. 

**Instruction:** Let us now copy the contents of the pod-definition.yml file, except for the apiVersion and kind and
place it under the template section. Take extra care on moving the contents to the right so it falls under template.


### Coding Exercise: ReplicaSet - 7
**Introduction:** Let us now link the pods to the ReplicaSet by updating selectors. 

**Instruction:** Add a property "matchLabels" under selector and copy the labels defined in the pod-definition under it.

**Note:** This may not work in play-with-k8s as it runs on 1.8 version of kubernetes. ReplicaSets moved to apps/v1 in 1.
9 version of Kubernetes.


### Coding Exercise: Deployment - 1
**Introduction:** Let us start with Deployments! Given a deployment-definition.yml file. We are only getting started
with it, so let's get it populated. 

**Instruction:** Add all the root level properties to it. 

**Note:** Only add the properties, not any values yet


### Coding Exercise: Deployment - 2
**Introduction:** Let us now add values for Deployment. Deployment is under apiVersion apps/v1 

**Instruction:** Update values for apiVersion and kind


### Coding Exercise: Deployment - 3
**Introduction:** Let us now add values for metadata 

**Instruction:** Name the Deployment frontend. And add labels app=>mywebsite and tier=> frontend


### Coding Exercise: Deployment - 4
**Introduction:** Let us now get to the specification 

**Instruction:** The spec section for Deployment has 3 fields: replicas, template and selector. Simply add these
properties. Do not add any values.


### Coding Exercise: Deployment - 5
**Instruction:** Let us update the number of replicas to 4.


### Coding Exercise: Deployment - 6
**Introduction:** The template section expects a Pod definition. Luckily, we have the one we created in the previous
set of exercises. Next to the deployment-definition.yml you will now find the same `pod-definition.yml` file that
you created before. 

**Instruction:** Let us now copy the contents of the `pod-definition.yml` file, except for the apiVersion and kind 
and place it under the template section. Take extra care on moving the contents to the right so it falls under template


### Coding Exercise: Deployment - 7
**Introduction:** Let us now link the pods to the Deployment by updating selectors. 

**Instruction:** Add a property "matchLabels" under `selector` and copy the labels defined in the pod-definition 
under it. 

**Note:** this may not work in play-with-k8s as it runs on 1.8 version of kubernetes


