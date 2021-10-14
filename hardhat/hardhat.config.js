require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKeys = fs.readFileSync("../.secret/.test_priv_keys").toString().split('\n').map(k=>'0x'+k) || ["8dda6cdcfdbf6ea764231841def05c64cf57ed0df9cc92cfca3f2c2997690891"]
const accounts = [];
privateKeys.forEach(k => accounts.push({privateKey:k,balance:String(100*10**18)}))

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      live: true,
      chainId: 1337,
      accounts : accounts
    },
    localhost: {
      live: true,
      url: "http://127.0.0.1:8545"
    },
    metadium_test:{
      url: "https://api.metadium.com/dev",
      accounts : [...privateKeys]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

