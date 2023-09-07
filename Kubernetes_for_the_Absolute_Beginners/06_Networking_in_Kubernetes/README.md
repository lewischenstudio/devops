## Section 06: Networking in Kubernetes

#### Table of Contents
- Basics of Networking in Kubernetes


### Basics of Networking in Kubernetes

When we start a single node Kubernetes cluster, the node is assigned with an IP address, i.e., 192.168.1.2.
It is the IP address we use to access the Kubernetes node.

When we create a single POD on the node above, an IP address is assigned to this POD, i.e., 10.244.0.2. 
When we deploy multiple PODs, they all get a separate IP assigned.

Kubernetes expects developers to setup networking to meet certain fundamental requirements. Some of these are
that all the containers or PODs in a Kubernetes cluster **MUST** be able to communicate with one another 
without having to configure NAT.

There are multiple pre-built solutions available to set up IPs for PODs, like cisco ACI networks, Cilium,
Big Cloud Fabric, Flannel, Vmware NSX-t and Calico.

Using **Calico** networking setup, it now manages the networks and Ips in our nodes and assigns a different
network address for each network in the nodes.