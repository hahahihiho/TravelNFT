const fs = require('fs');
const ipfsClient = require('ipfs-http-client');

const url = new URL("http://127.0.0.1:5001"); // hostname, port, protocol

const ipfsAPI = ipfsClient.create(url);

async function addFile(data){
	const result = await ipfsAPI.add(data);
	return result;
}

function makeData(path){
	const data = {
		path : path,
		content : fs.readFileSync(path)
	}
	return data;
}

const path = './cloud.jpg'
const data = makeData(path);
const result = addFile(data);
result.then((res,rej)=>{
    console.log(res);
    file_hash = res.cid.toString();
    console.log('http://ipfs.io/ipfs/'+file_hash);
})