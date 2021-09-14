import Web3Modal from 'web3modal'
import { ethers } from 'ethers'


const connection = await web3Modal.connect()  // 연결
const provider = new ethers.providers.Web3Provider(connection)   // 연결정보 ethers에 전달
const signer = provider.getSigner()     // 서명


let contract = new ethers.Contract(Contract.address, Contract.abi, signer)



export default {isMetamask, connect}