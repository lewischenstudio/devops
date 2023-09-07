## Section 10: Setup Multi Node Cluster using Kubeadmin

#### Table of Contents
- References
- Kubernetes Setup - Kubeadm
- Demo - Setup Lab - VirtualBox
- Demo - Provision cluster using Kubeadm
- Kubernetes Setup - Introduction and Minikube
- Quiz: Setup Kubernetes
- Kubernetes Series of Courses
- Demo - Minikube


### Reference

Install [Oracle VirtualBox](https://www.virtualbox.org/)

Install [Vagrant](https://www.vagrantup.com/)

Check [Link to download VM images](http://osboxes.org/)

Check [Link to kubeadm installation instructions](https://kubernetes.io/docs/setup/independent/install-kubeadm/)

Install [MiniKube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

While using Minikube with  Virtualization technologies, specify the --vm-driver option with `minikube start --vm-driver=<driver_name>`. Refer to [specifying vm driver](https://kubernetes.io/docs/setup/learning-environment/minikube/#specifying-the-vm-driver)



### Kubernetes Setup - Kubeadm

Master Node
- replica-controller
- node-controller
- etcd
- </>kube-apiserver

Worker Node(s)
- Container runtime
- </>kublet

Kubeadmin sets up the master node and worker nodes.

#### Steps
Master Node
- containerd
- kubeadmin
- initialize

Worker Node(s)
- containerd
- kubeadmin

Requires POD Network

Join Node



### Demo - Setup Lab - VirtualBox

Clone the repository and then use the system terminal
```
vi Vagrantfile
vagrant status
vagrant up
vagrant ssh kubemaster
... logout
vagrant ssh kubenode01
... logout
vagrant ssh kubenode02
```


### Demo - Provision cluster using Kubeadm



### Kubernetes Setup - Introduction and Minikube

#### Local Environments
- Minikube
- MicroK8s
- Kubeadmin

#### Cloud Environments
- Google Cloud Platform
- Amazon Web Services
- Microsoft Azure

#### KodeKloud
- www.kodekloud.com

Master Node
- replica-controller
- node-controller
- etcd
- </>kube-apiserver

Worker Node(s)
- Container runtime
- </>kublet

#### Minikube
- Master Node + Worker Node
- ISO image for download
- Provides executable command line with VirtualBox
- Windows: VirtualBox or Hyper-V
- Linux: VirtualBox or KVM
- Requires `kubectl` installed



### Quiz: Setup Kubernetes

#### Question 1: Which of the below is an option to run Kubernetes in a Local Environment?
minikube

#### Question 2: Which of the below is an instant way of setting up a permanent kubernetes cluster on the cloud?
Google Cloud Platform

#### Question 3: Which of the below solution is used for setting up a multi-node Kubernetes cluster in a local environment?
kubeadmin



### Kubernetes Series of Courses

#### Kubernetes for the Absolute Beginners
- Lab Environment
- PODs, Deployments
- Services
- Demos
- Pre-requisites - YAML
- Networking Basics
- Micro-Services Architecture
- Coding Exercises


#### Kubernetes for Administrators
- HA Development
- Logging/Monitoring
- Maintenance
- Troubleshooting
- Demos
- Kubernetes Scheduler
- Application Lifecycle
- Security
- Core Concepts
- Coding Exam
- Certified Kubernetes Administrator Exam

#### Kubernetes for Developers
- Core Concepts
- Multi-Container Pods
- Logging & Monitoring
- Jobs
- Demos
- ConfigMaps, Secretes & Servie Accounts
- Readiness & Liveness Probes
- Pod Design
- Services & Networking
- Coding Exam
- Certified Kubernetes Application Developer Exam


### Demo - Minikube

Install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) on Linux

Linux Commands
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
chmod +x kubectl
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl
kubectl version 
```

Install [minikube](https://minikube.sigs.k8s.io/docs/start/)

Linux Commands
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start (--driver=virtualbox)
minikube status
kubectl get nodes
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
kubectl get deployment
kubectl expose deployment hello-minikube --type=NodePort --port=8080
minikube service hello-minikube --url
```

Go to the URL on your browser: http://192.168.99.100:31391

[Hello Minikube ](https://kubernetes.io/docs/tutorials/hello-minikube/)