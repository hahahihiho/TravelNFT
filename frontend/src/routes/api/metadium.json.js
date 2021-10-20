
import https from 'https';
import config from '../../config/config'
import api_keys from '../../config/api_keys';

const CA = config.nftCA;
// const url = `https://testnetapi.metadium.com/mrc-721/${CA}/tokens`

const options = {
    hostname : 'testnetapi.metadium.com',
    path : `/mrc-721/${CA}/token-transfer`,
    method : "GET",
    headers:{
        "Content-Type" : "application/json",
        "api-key": [api_keys.metadium_apikey]
    }
}

export function get(request,response,next) {
    let data;
    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.setEncoding('utf-8')
        res.on('data',d=>{
            console.log('data',d);
            data = d;
        })
    })
    console.log(data)
    
    req.on('error',e=>{
        console.error(e);
    })
    req.end();
}
