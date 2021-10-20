// import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import axios from 'axios';
import wallet from './wallet.js';
import Contract from '../config/config'

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

async function getMyNfts(){
    const signer = await getSigner();
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    const data = await tokenContract.getAll();
    const selectedAddress = ethers.utils.getAddress(wallet.getSelectedAddress());
    let result = Promise.all(data.map(async (d,i) => {
        let item = null;
        console.log(selectedAddress,d)
        if(selectedAddress == d){
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
        }
        return item
    }))
    return result;
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

async function getMarketNFTs(){
    const signer = await getSigner();
    const marketContract = new ethers.Contract(Contract.marketCA, Contract.marketAbi, signer)
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)

    const data = await marketContract.getAll();
    const items = await Promise.all(data.map(async i => {
        try{
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                marketId: i.itemId.toNumber(),
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                region : meta.data.region,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
            }
            return item
        } catch(e){
            console.log(e)
            return null;
        }
    }))
    return items;
}

async function sellToken(entity) {
    const {tokenId,price} = entity
    const signer = await getSigner()

    const sell_price = ethers.utils.parseUnits(price, 'ether')

    /* then list the item for sale on the marketplace */
    const tokenContract = new ethers.Contract(Contract.nftCA, Contract.nftAbi, signer)
    const marketContract = new ethers.Contract(Contract.marketCA, Contract.marketAbi, signer)
    let listingPrice = await marketContract.getListingPrice()
    listingPrice = listingPrice.toString()

    let approved_address = await tokenContract.getApproved(tokenId);
    let transaction;
    let tx;
    if(approved_address != Contract.marketCA){
        transaction = await tokenContract.approve(Contract.marketCA,tokenId)
        tx = await transaction.wait()
    }
    transaction = await marketContract.createMarketItem(Contract.nftCA, tokenId, sell_price, { value: listingPrice })
    tx = await transaction.wait()
    console.log(tx);
}

async function buyToken(entity) {
    const {marketId,price} = entity
    const signer = await getSigner()
    const contract = new ethers.Contract(Contract.marketCA, Contract.marketAbi, signer)

    const buy_price = ethers.utils.parseUnits(price.toString(), 'ether')
    console.log(marketId,buy_price)
    const transaction = await contract.createMarketSale(Contract.nftCA, marketId, {
      value: buy_price
    })
    let tx = await transaction.wait()
    console.log(tx)
}

export default {getSigner, createSale, getAllNFTs,getMyNfts,getMarketNFTs,getTokenById,sellToken,buyToken}