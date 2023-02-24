# DevOps
Introduction to DevOps. This repository contains courses and materials about DevOps.

## Courses
The courses folder has the following modules
- Virtual machine
- Linux
- Vagrant
- Containers
- Bash scripting
- AWS
- GIT
- Maven
- Ansible
- Python
- Docker
- Kubernetes
- Jenkins
- Terraform
- CloudFormation

## Introduction

### What is DevOps?
It is a philosophy of combining development and operational (Dev & Ops) teams at culture, practice and tools level.


### What is Continuous Integration?
It is a DevOps software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run.

### What is Continous Delivery?
It is a software development practice where code changes are automatically prepared for a release to production.

## Pre-requisites

### Windows Tools
- Install [chocolatey](https://chocolatey.org/docs/installation)
- Run the commands on Powershell
```powershell
choco install virtualbox
choco install vagrant
choco install git
choco install jdk8
choco install maven
choco install awscli
choco install intellijidea-community
choco install sublimetext3.app
```

### MacOS Tools
- Install [brew](https://brew.sh/)
- After installing homebrew, create a file in users home directory with name `.curlrc` with content "-k"
(-k without quotes and give a new line character after -k.). On terminal, run the commands:
```bash
echo -k > ~/.curlrc
cat ~/.curlrc
```
- Run the commands on Powershell
```bash
brew install --cask virtualbox (Not For MacOs ARM chips)
brew install --cask vagrant
brew install --cask vagrant-manager
brew install git
brew install openjdk@8
brew install openjdk@8
brew install maven
brew install --cask intellij-idea
brew install --cask intellij-idea-ce
brew install --cask sublime-text
brew install awscli
```


### Linux Tools

Refer to the Linux module.