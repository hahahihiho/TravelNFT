// import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import axios from 'axios';
import wallet from './wallet.js';
import Contract from './config.js'

async function getSigner(){
    const provider = new ethers.providers.Web3Provider(wallet.ethereum);
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()     // 서명
    return signer
}

async function createSale(url) {
    const signer = await getSigner()
    let contract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    let transaction = await contract.createToken(url)
    await transaction.wait()
}

async function getTokenById(id){
    const signer = await getSigner();
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    const data = await tokenContract.getAll(id);
    return data;
}

async function getTokenOwners(){
    const signer = await getSigner();
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    const data = await tokenContract.getAll();
    return data;
}

async function getAllNFTs(){
    const signer = await getSigner();
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    const data = await tokenContract.getAll();

    let result = Promise.all(data.map(async (d,i) => {
        let item = null;
        if(parseInt(d)!=0){
            const tokenUri = await tokenContract.tokenURI(i)
            const meta = await axios.get(tokenUri)
            const {address, name, description, region, image, special } = meta.data
            item = {
                tokenId: i,
                owner: address,
                name,
                description,
                region,
                image,
                special
            }
        }
        return item
    }))
    return result;
}

export default {getSigner, createSale, getAllNFTs,getTokenById}