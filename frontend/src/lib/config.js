import Config from '../../../hardhat/config.js'
const {ABI,CA} = Config

const marketAbi = ABI.marketAbi
const nftAbi = ABI.nftAbi
const marketCA = CA.marketCA
const nftCA = CA.nftCA

export default {marketAbi,nftAbi,marketCA,nftCA}