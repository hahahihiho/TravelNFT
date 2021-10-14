const hre = require("hardhat");
const fs = require('fs');

const CA_PATH = 'CA.js'

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMarket deployed to:", nftMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  let config = `
  const nftmarketaddress = "${nftMarket.address}"
  const nftaddress = "${nft.address}"
  module.exports = {nftmarketaddress, nftaddress}
  `

  let data = JSON.stringify(config)
  fs.writeFileSync(CA_PATH, JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
