import ABI from '../../../hardhat/config'
import CA from '../../../hardhat/CA'

const marketAbi = ABI.marketAbi
const nftAbi = ABI.nftAbi
const marketCA = CA.nftmarketaddress
const nftCA = CA.nftaddress

export default {marketAbi,nftAbi,marketCA,nftCA}