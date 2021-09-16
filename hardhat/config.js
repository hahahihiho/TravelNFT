const Market = require("./artifacts/contracts/Market.sol/NFTMarket.json")
const NFT = require('./artifacts/contracts/NFT.sol/NFT.json')
const ContractAddress = require("./CA.js");

const marketAbi = Market.abi
const nftAbi = NFT.abi
const ABI = {marketAbi,nftAbi}

const marketCA = ContractAddress.nftmarketaddress
const nftCA = ContractAddress.nftaddress
const CA = {marketCA, nftCA}

module.exports = {ABI, CA}