sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
# restart terminal
source ~/.profile
nvm install node
nvm install --lts