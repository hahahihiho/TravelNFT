# Travel NFT

## Structure
![project](/images/project.png)

## Watch simulation
https://youtu.be/uENA2W9ATvE


# How to execute

## Install what you need

### npm
```
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
// restart terminal
nvm install node
nvm install --lts
```

### docker
```
sudo apt update
sudo apt install docker.io
// Create the docker group.
sudo groupadd docker
// Add your user to the docker group.
sudo usermod -aG docker $USER
// Log out and log back in so that your group membership is re-evaluated.
```
### docker-compose
sudo apt install docker-compose

=====

## Prerequired environments

### ipfs
```
wget https://dist.ipfs.io/go-ipfs/v0.9.1/go-ipfs_v0.9.1_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.9.1_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs --version
ipfs init
ipfs daemon
```

### ipfs in docker.
```
wget https://dist.ipfs.io/ipfs-cluster-ctl/v0.14.0/ipfs-cluster-ctl_v0.14.0_linux-amd64.tar.gz
tar xvzf ipfs-cluster-ctl_v0.14.0_linux-amd64.tar.gz
wget https://raw.githubusercontent.com/ipfs/ipfs-cluster/master/docker-compose.yml
docker-compose up
```
// Everything should have loaded after a couple of minutes:
#### how to use
./ipfs-cluster-ctl peers ls
./ipfs-cluster-ctl add Neptune_-_Voyager_2_\(29347980845\)_flatten_crop.jpg
./ipfs-cluster-ctl status QmdzvHZt6QRJzySuVzURUvKCUzrgGwksvrsnqTryqxD4yn
docker-compose kill
wget https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg

### hardhat (node, deploy)
npm init --yes
npm install --save-dev hardhat


### handle ipfs-http-client longbit circulate import error
frontent/node_modules/protobufjs/src/util/minimal.js -> comment out util.longbits (we don't use it)