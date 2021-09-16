import ABI from '../../../hardhat/config.js'
import CA from '../../../hardhat/CA.js'

const marketAbi = ABI.marketAbi
const nftAbi = ABI.nftAbi
const marketCA = CA.nftmarketaddress
const nftCA = CA.nftaddress

export default {marketAbi,nftAbi,marketCA,nftCA}