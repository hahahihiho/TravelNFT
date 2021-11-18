# Travel NFT

## Structure
![project](/images/project.png)

## Watch simulation
https://youtu.be/uENA2W9ATvE

## Directory Structure
* Required
  * .secret: sample_private_keys
  * back : bash script(install, deploy, run, kill)
  * front : dapp(svelte, sapper)
  * hardhat : contract, deploy, local_node
* Not required
  * images : sample_image(no copyright issue - taken by hahahihiho)
  * ipfs : ipfs connecting(ipfs-http-client.js),
  * web : web3.js testing 

## Prerequisites
* Dapp
  * nodejs
* IPFS
  * docker
  * docker-compose
  * ipfs

### handle ipfs-http-client longbit circulate import error
```
frontent/node_modules/protobufjs/src/util/minimal.js -> comment out util.longbits (we don't use it)
```

# [Additional Info]
### How to Install and Handle

### npm
```
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
// restart terminal
nvm install node
nvm install --lts
```

### docker & docker-compose
```
sudo apt update
sudo apt install docker.io
// Create the docker group.
sudo groupadd docker
// Add your user to the docker group.
sudo usermod -aG docker $USER
// Log out and log back in so that your group membership is re-evaluated.

// docker-compose
sudo apt install docker-compose
```

### IPFS
* Run on Linux
```
wget https://dist.ipfs.io/go-ipfs/v0.9.1/go-ipfs_v0.9.1_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.9.1_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs --version
ipfs init
ipfs daemon
```

* Run on docker
```
wget https://dist.ipfs.io/ipfs-cluster-ctl/v0.14.0/ipfs-cluster-ctl_v0.14.0_linux-amd64.tar.gz
tar xvzf ipfs-cluster-ctl_v0.14.0_linux-amd64.tar.gz
wget https://raw.githubusercontent.com/ipfs/ipfs-cluster/master/docker-compose.yml
docker-compose up
// Everything should have loaded after a couple of minutes:

// how to use
./ipfs-cluster-ctl peers ls
wget https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg
./ipfs-cluster-ctl add Neptune_-_Voyager_2_\(29347980845\)_flatten_crop.jpg
./ipfs-cluster-ctl status QmdzvHZt6QRJzySuVzURUvKCUzrgGwksvrsnqTryqxD4yn
docker-compose kill
```
ref : https://docs.ipfs.io/install/server-infrastructure/#create-a-local-cluster

### hardhat (local_node, deploy)
```
npm init --yes
npm install --save-dev hardhat
// run local node
npx hardhat node
```

