# Vagrant

## Contents
- Introduction to Vagrant
- Create VM Automatically
- Vagrant Commands
- Vagrant Networking
- Provisioning
- Multiple VM Vagrantfile
- VS Code Remote SSH

## Introduction
The most efficient way to create VMs is to create them automatically through code, so it become repeatable and easy. Vagrant is a VM automation tool which uses Hypervisor like Oracle Virtualbox to manage and automate VM lifecycle on our laptops/desktops.

### VM Management Problems
- OS installations
- Time consuming
- Manual setup
- Tough replication for multiple VM
- Documentations for multiple VM

### Vagrant for VM's
- VM changes automatic through Vagrantfile
- Vagrant commands to manage VM's
- Provisioning VM/Executing commands & scripts

### Vagrant Architecture
- Boxes/Images from Vagrant Cloud
- Vagrant commands
```
vagrant up
vagrant halt
vagrant reload
vagrant destroy
vagrant ssh
```
- Vagrantfile
- Hypervisor to launch VMs
  - Oracle Virtualbox
  - VMware
  - Workstation
- VM1, VM2, VM3, ...

## Vagrant Setup Pre-requisites
- VT (Virtualization Technology) Enabled in BIOS
- Vagrant Tool
- Hypervisor 
- CLI (Command Line Interface) like GIT Bash, Powershell, etc.

### VM Setup with Vagrant
- Vagrant box name from https://app.vagrantup.com/boxes/search
- Project directory in your host OS
- Vagrantfile in Project directory
- vagrant commands like `vagrant up`
- Login with `vagrant ssh` command for Linux VM's


### Centos 7
- Create a project directory in your host OS
- Copy the Centos 7 box name "geerlingguy/centos7" from [vagrant boxes](https://app.vagrantup.com/boxes/search?utf8=%E2%9C%93&sort=downloads&provider=&q=centos+7)
- Initialize the vagrant folder with `vagrant init geerlingguy/centos7`
- Open the `Vagrantfile` file and observe that the vm box name is `config.vm.box = "geerlingguy/centos7"`
- Open CLI software (GIT Bash) to enter commands.
- Install Centos 7 in the Hypervisor with `vagrant up`
- Check the Oracle Virtualbox to see the Centos 7 VM is up and running.
- Log into the VM with `vagrant ssh` after installation. 
- Restart the VM with `vagrant reload`.
- Stop the VM withh `vagrant halt`.


### Ubuntu 18
- Create a project directory in your host OS
- Copy the Ubuntu 18 box name "ubuntu/bionic64" from [vagrant boxes](https://app.vagrantup.com/boxes/search?utf8=%E2%9C%93&sort=downloads&provider=&q=ubuntu+18)
- Initialize the vagrant folder with `vagrant init ubuntu/bionic64`
- Open the `Vagrantfile` file and observe that the vm box name is `config.vm.box = "ubuntu/bionic64"`
- Open CLI software (GIT Bash) to enter commands.
- Install Ubuntu 18 in the Hypervisor with `vagrant up`
- Check the Oracle Virtualbox to see the Ubuntu 18 VM is up and running.
- Log into the VM with `vagrant ssh` after installation. 
- Restart the VM with `vagrant reload`.
- Stop the VM withh `vagrant halt`.


## Visual Studio Code Remote SSH
We can use VS Code to work directly inside the VM for our work. 
### Steps 
- Go to the directory `~/.ssh` and open the file `config` (create one if it doesn't exist).
- Go to the project directory and spin up the VM with `vagrant up`.
- Enter `vagrant ssh-config` once the VM is running.
- Copy the content and paste it at the bottom of the `config` file.
- Rememeber the Host, e.g. "default". You can change this name to something else, like "myBestVM".
- Install the VS extension `Remote - SSH` from the Extensions.
- Click on the left bottom green icon to popup the "Remote Window" dropdown.
- Click "Connect to Host" and select "default" (or "myBestVM" if you changed the Host).
- VS Code is now logged into the VM.
