## Section 09: Kubernetes on Cloud

#### Table of Contents
- Kubernetes on Cloud - Introduction
- Kubernetes on GCP (GKE)
- Reference - Google Cloud Platform
- Kubernetes on AWS (EKS)
- Kubernetes on Azure (AKS)

### Kubernetes on Cloud - Introduction

| **Self Hosted**                               | **Hosted Solutions**            |
|-----------------------------------------------|---------------------------------|
| Turkey Solutions                              | Managed Solutions               |
| You provision VMs                             | Kubernetes-As-A-Service         |
| You configure VMs                             | Provider provisions VMs         |
| You use scripts to deploy cluster             | Provider installs Kubernetes    |
| You maintain VMs yourself                     | Provider maintains VMs          |
| e.g., Kubernetes on AWS using kops or KubeOne | e.g., Google Cloud Engine (GKE) |


#### Hosted Solutions
- Google Kubernetes Engine (GKE)
- Azure Kubernetes Service (AKS)
- Amazon Elastic Kubernetes Service (EKS)


### Kubernetes on GCP (GKE)

[Google Cloud Free Tier](https://cloud.google.com/free/docs/gcp-free-tier)

#### Steps
- Go to **Google Cloud Platform** console
- From **Menu** go to **Kubernetes Engine**
- Click on **Create cluster**
- Change **Name** to "example-voting-app"
- Use the default **Location Type** 
- Use the default **Master version**
- Click on **Create** to create the cluster
- Wait for it to finish 
- Click on **Connect**
- Click on **Run in Cloud Shell**
- **Enter** to enable `kubectl` in the cloud shell
- Use the **Cloud Shell** 

#### GCP Cloud Shell
```
kubectl get nodes
git clone ${your_kubernetes_repository}
kubectl create -f voting-app-deploy.yaml
kubectl create -f voting-app-service.yaml
kubectl create -f redis-deploy.yaml
kubectl create -f redis-service.yaml
kubectl create -f postgres-deploy.yaml
kubectl create -f postgres-service.yaml
kubectl create -f worker-app-deploy.yaml
kubectl create -f result-app-deploy.yaml
kubectl create -f result-app-service.yaml
kubectl get deployment,svc
```

Check files in `deployment` folder and note that the `type` has been changed to `LoadBalancer` for 
`voting-app-deploy.yaml` and `result-app-deploy.yaml` according to the GKE environment setting.

#### Resume Steps
- On **GCP**, check **Services & Ingress** to see five services are running
- Click on the http addresses (IPs) for `voting-app` and `result-app` to test the frontend pages



### Reference - Google Cloud Platform

[Free Sign Up](https://cloud.google.com/free/)

[Kubernetes on Google](https://cloud.google.com/kubernetes-engine/docs/)



### Kubernetes on AWS (EKS)

#### Pre-requisites
- AWS account
- Installing KubeCtl CLI
- EKS Cluster Role
- IAM Role for Node Group
- VPC
- EC2 Key Pair which can be used to SSH to the worker nodes
- AWS Basics

[Getting started with the EKS console](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html)

#### Steps
- Log onto AWS console
- Search or go to **EKS**
- Enter "example-voting-app" for the **Cluster name**
- Select the created **Cluster Service Role**
- Use the default **VPC**
- Leave all others default values and click **Create**
- Click on **Add Node Group**
- Enter "demo-workers" for **Name**
- Select the created role for **Node IAM Role**
- Use the default **Subnets**
- Select the created key pair for **SSH key pair**
- Use the default **Node compute configuration**
- Use the default **Group Size**
- Review and **Create**
- Wait for it to finish 


#### AWS CLI on Local Linux
Install AWS CLI on your system and follow the commands below to set up Kubernetes on AWS EKS above
```
aws eks update-kubeconfig --region region-code --name example-voting-app
kubectl get nodes
git clone ${your_kubernetes_repository}
kubectl create -f voting-app-deploy.yaml
kubectl create -f voting-app-service.yaml
kubectl create -f redis-deploy.yaml
kubectl create -f redis-service.yaml
kubectl create -f postgres-deploy.yaml
kubectl create -f postgres-service.yaml
kubectl create -f worker-app-deploy.yaml
kubectl create -f result-app-deploy.yaml
kubectl create -f result-app-service.yaml
kubectl get deployment,svc
```

Click on the http addresses (external IPs) for `voting-app` and `result-app` to test the frontend pages



### Kubernetes on Azure (AKS)

#### Pre-requisites
- Azure Account
- Active Subscription
- Azure Basics

[Azure AKS Portal](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli)

#### Steps
- Log onto Azure account
- Look up or go to **AKS**
- Click on **Add** dropdown and then **Add Kubernetes cluster**
- Select the right **Subscription**
- Create a new **Resource Group** with the name "votingapp-resourcegroup"
- Enter "example-voting-app" for **Kubernetes cluster name**
- Use the default **Kubernetes version**
- Enter 1 for **Node count**
- Click on **Review + Create**
- Click on **Create**
- Wait for it to finish 
- Type "example-voting-app" in the search bar
- Click on **Cloud Shell** icon on the top of the screen
- Click on **Create Storage**
- Enter the **Cloud Shell**

#### Azure Cloud Shell
```
az aks get-credentials --resource-group votingapp-resourcegroup --name example-voting-app
kubectl get nodes
git clone ${your_kubernetes_repository}
kubectl create -f voting-app-deploy.yaml
kubectl create -f voting-app-service.yaml
kubectl create -f redis-deploy.yaml
kubectl create -f redis-service.yaml
kubectl create -f postgres-deploy.yaml
kubectl create -f postgres-service.yaml
kubectl create -f worker-app-deploy.yaml
kubectl create -f result-app-deploy.yaml
kubectl create -f result-app-service.yaml
kubectl get deployment,svc
```

Click on the http addresses (external IPs) for `voting-app` and `result-app` to test the frontend pages





