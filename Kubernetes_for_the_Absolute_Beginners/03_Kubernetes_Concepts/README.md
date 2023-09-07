## Section 03: Kubernetes Concepts

#### Table of Contents
- Pods
- Demo - Pods
- Reference - Pods
- Quiz: Pods


### Pods
A pod is a single instance of an application. A pod is the smallest object that you can create
in Kubernetes. A container runs logically in a pod (though it also uses a container runtime). 
A group of pods, related or unrelated, run on a cluster. A pod is a unit of replication on a 
cluster. A cluster can contain many pods, related or unrelated and grouped under the tight
logical borders called namespaces. A pod's whole reason for existing is to manage a container 
(or containers) within it.


### Demo - Pods

#### Create Pod Image
```
kubectl run nginx --image nginx
```

#### List Pods
```
kubectl get pods
```

#### Describe a Pod
```
kubectl describe pod nginx
```

#### List Pods Additional Information
```
kubectl get pods -o wide
```


### Reference - Pods
[Kubernetes Concepts](https://kubernetes.io/docs/concepts/)

[Pod Overview](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)


### Quiz: Pods
#### Question 1: The smallest unit you can create in Kubernetes object model is:
Pods

#### Question 2: A Pod can only have one container in it.
False

#### Question 3: What is the right approach to scale an application
Deploy additional pods





