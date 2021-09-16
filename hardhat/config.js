const Market = require("./artifacts/contracts/Market.sol/NFTMarket.json")
const NFT = require('./artifacts/contracts/NFT.sol/NFT.json')

const marketAbi = Market.abi
const nftAbi = NFT.abi

module.exports = {marketAbi, nftAbi}