# Vagrant Installation on Windows

#### Table of Contents

- [Vagrant](#vagrant)
- [VS Code](#vs-code)
- [NVM](#nvm)
- [Docker](#docker)
- [SSH Key](#ssh-key)
- [Bashrc File](#bashrc-file)

### Vagrant

#### Vagrant File

Place the file `vagrant` in your desired folder for installing VM. An example of
the content is as the following:

```ruby
Vagrant.configure("2") do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "bento/ubuntu-20.04"
  config.disksize.size = "64GB"

  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.cpus = "8"
    vb.memory = "8192"
  end
end
```

#### Update Plugins and Box

Update the boxes and plugins before creating the VM:

```bash
vagrant plugin update
vagrant box update
```

#### Install VM Box

```bash
vagrant up
```

### VS Code

#### Setup SSH

Using Visual Studio Code, you can work directly with the VM using VSCode's
[remote-ssh extension and workflow](https://code.visualstudio.com/docs/remote/ssh).
I.e., you're using VSCode installed on the host but working inside the VM via
SSH.

First, add the Vagrant box to your SSH config using `vagrant ssh-config` and
copy that to your `~/.ssh/config` folder.

Then in VSCode, run the _Remote-SSH: Connect to Host_ command; find the Vagrant
VM host that you added to the SSH config file; and click to connect. This will
open a new VSCode window that operates in the VM via SSH. I.e, the file browser
will look in the VM's file system and the integrated terminal will open a Bash
terminal in the VM.

### NVM

Open a terminal on your system or connect a remote system using SSH. Use the
following commands to install curl on your system, then run the nvm installer
script.

```bash
sudo apt-get update
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

#### Node

Install Node with NVM. It's better to specify a version of your choice or the
version required at work than installing the latest version.

```bash
nvm install 16.15.0
```

### Docker

First, update your existing list of packages:

```bash
sudo apt update
```

Next, install a few prerequisite packages which let apt use packages over HTTPS:

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common

```

Then add the GPG key for the official Docker repository to your system:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add the Docker repository to APT sources:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

This will also update our package database with the Docker packages from the
newly added repo. Finally, install Docker:

```bash
sudo apt install docker-ce
```

Docker should now be installed, the daemon started, and the process enabled to
start on boot. Check that it's running:

```bash
sudo systemctl status docker
```

#### Avoid Sudo

By default, the `docker` command can only be run the root user or by a user in
the docker group, which is automatically created during Docker's installation
process. If you want to avoid typing `sudo` whenever you run the `docker`
command, add your username to the docker group. We use "vagrant" for the
username since it is by default "vagrant".

```bash
sudo usermod -aG docker vagrant
```

Close VS Code and reconnect to VM to see that it takes effect.

```bash
docker --version

Output
Docker version 24.0.6, build ed223bc
```

### Docker Compose

First, confirm the latest version available in their releases page.

The following command will download the latest release and save the executable
file at `/usr/local/bin/docker-compose`, which will make this software globally
accessible as `docker-compose`:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Next, set the correct permissions so that the `docker-compose` command is
executable:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

To verify that the installation was successful, you can run:

```bash
docker-compose --version

Output
docker-compose version 1.29.2, build 5becea4c
```

You'll see output similar to this:

### SSH Key

You can generate a new SSH key on your local machine. After you generate the
key, you can add the public key to your account on GitHub.com to enable
authentication for Git operations over SSH.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### Bashrc File

Add the following to the end of the file at `~/.bashrc`

```ruby
# ********** BASH CUSTOMIZATIONS **********

# Configure terminal prompt.
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1='\[\e[0;32m\]\u@\h\[\e[m\] \[\e[1;36m\]\w\[\e[1;33m\] $(parse_git_branch)\[\e[m\] \[\e[1;32m\]\n$\[\e[m\] \[\e[1;37m\]'
export CLICOLOR=1
export LSCOLORS=gxfxcxdxbxegedabagacad
```
