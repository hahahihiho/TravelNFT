import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import wallet from './wallet.js';
import Contract from './config.js'


async function getSigner(){
    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
    }); 
    if(wallet.isConnected()){
        const connection = await web3Modal.connect()  // 연결
        const provider = new ethers.providers.Web3Provider(connection)   // 연결정보 ethers에 전달
        const signer = provider.getSigner()     // 서명
        return signer
    }
}

async function createSale(url) {
    const signer = await getSigner()
    let contract = new ethers.Contract(Contract.marketCA, Contract.marketAbi, signer)
    let transaction = await contract.createToken(url)
    await transaction.wait()
}

export default {getSigner, createSale}