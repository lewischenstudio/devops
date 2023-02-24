# Oracle Virtualbox

## Windows Users 
The following steps may apply to some Windows users.

### VTx
Enable virtualization in BIOS
- VTx
- Secure virtual machine
- Virtualization

### Disable other Windows virtualization
- Microsoft Hyperv
- Windows Hypervisor platform
- Windows Subsystem for Linux
- Docker Desktop
- Virtual Machine Platform

### Reboot
- Power off your computer
- Reboot router
- Power on your computer

## Oracle Virtualbox
Install Oracle Virtualbox from https://www.virtualbox.org/

### Centos 7
Steps: 
- Download Centos 7 ISO from [here](https://mirror.esecuredata.com/centos/7.9.2009/isos/x86_64/)
- Select "CentOS-7-x86_64-Minimal-2009.iso" for minimal package
- Open Oracle Virtualbox
- Name: my-centos7
- Version: Red Hat (64-bit)
- Memory size: 1024 MB
- Hard disk: Create a virtual hard disk now
- Hard disk file type: VDI (Virtualbox Disk Image)
- Storage on physical hard disk: Dynamically allocated
- File location and size: 8.00 GB
- Create
- Settings -> Storage -> Choose a disk file. Select the Centos 7 ISO
- Settings -> Network -> Adapter 2 -> Enable Network Adapter -> Bridged Adapter -> Name: Your computer internet adapter
- Start
- Select language: English
- Installer update: Continue without updating
- Keyboard configuration: Done
- Network Connection: Done
- Configure proxy: Done 
- Configure Ubuntu archive mirror: Done
- Guided storage configuration: Done
- Storage configuration: Done
- Confirm destructive action: Continue
- Profile setup: **REMEMBER USERNAME AND PASSWORD**
- SSH Setup: [x] Install OpenSSH server --> Done
- Featured Server Snaps: Done
- Installing system: Reboot
- Settings -> Storage -> Remove disk from virtual drive
- Press Enter to loanch Centos 7 
- Enter username and password
```bash
clear
ifconfig
```
Remember the IP address. On your Host OS, open `Git Bash`, `Terminal` or `PowerShell` and enter the secure shell command below to log into the guest OS
```bash
ssh username@ip_address
```
Windows users can also install [Putty](https://www.putty.org/) to log into the guest OS. 


### Ubuntu 18
- Download Ubuntu 18 ISO from [here](https://releases.ubuntu.com/18.04/)
- Select "64-bit PC (AMD64) server install image" for server install image
- Open Oracle Virtualbox
- Name: my-ubuntu18
- Version: Ubuntu (64-bit)
- Memory size: 1024 MB
- Hard disk: Create a virtual hard disk now
- Hard disk file type: VDI (Virtualbox Disk Image)
- Storage on physical hard disk: Dynamically allocated
- File location and size: 8.00 GB
- Create
- Settings -> System -> Processor(s): 2 CPU
- Settings -> Storage -> Choose a disk file. Select the Ubuntu 18 ISO
- Settings -> Network -> Adapter 2 -> Enable Network Adapter -> Bridged Adapter -> Name: Your computer internet adapter
- Start
- Select language: English
- Installer update: Continue without updating
- Keyboard configuration: Done
- Network Connection: Done
- Configure proxy: Done 
- Configure Ubuntu archive mirror: Done
- Guided storage configuration: Done
- Storage configuration: Done
- Confirm destructive action: Continue
- Profile setup: **REMEMBER USERNAME AND PASSWORD**
- SSH Setup: [x] Install OpenSSH server --> Done
- Featured Server Snaps: Done
- Installing system: Reboot
- Settings -> Storage -> Remove disk from virtual drive
- Press Enter to loanch Ubuntu 18
- Enter username and password
```bash
clear
ifconfig
```
Remember the IP address. On your Host OS, open `Git Bash`, `Terminal` or `PowerShell` and enter the secure shell command below to log into the guest OS
```bash
ssh username@ip_address
```
Windows users can also install [Putty](https://www.putty.org/) to log into the guest OS. 
