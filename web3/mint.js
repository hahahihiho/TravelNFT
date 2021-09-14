'use strict'
const Web3 = require('web3');
const fs = require('fs');

const url = 'http://localhost:8545'
const web3 = new Web3(url);

const contract_list = ["BisotileFurniture","IsotileFurniture"]
const contract_name = contract_list[0]
const ca_file = '../isotile-contracts/build/ca.json'
const abi_file = `../isotile-contracts/build/${contract_name}.json`

function getJson(path){
    const rawdata = fs.readFileSync(path);
    const json = JSON.parse(rawdata);
    return json;
}

const CA = getJson(ca_file)[contract_name];
const ABI = getJson(abi_file).abi[0];

const nftContract = new web3.eth.Contract(ABI, CA);
