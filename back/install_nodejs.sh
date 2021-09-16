#!/bin/bash
sudo apt-get install curl -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
# restart terminal
source ~/.bashrc
source ~/.profile
source ~/.nvm/nvm.sh

nvm install node
nvm install --lts
