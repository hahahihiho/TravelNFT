import { create as ipfsHttpClient } from 'ipfs-http-client'

const IPFS_API = "https://ipfs.infura.io:5001/api/v0"
const IPFS_BASE_URL = "https://ipfs.io/ipfs/"
const ipfs_http = ipfsHttpClient(IPFS_API)


async function uploadData(data){
    try{
        const added = await ipfs_http.add(
            data,
            {
                progress: (prog) => console.log(`received: ${prog}`)
            }
        )
        console.log(added.path)
        return added.path
    } catch (error){
        console.log('Error uploading file: ', error)
    }
}

function makeData(address, name, description, image, region, special) {
    return {address,name,description,image,region,special}
}

async function uploadContent(address,name,description,image,region,special){
    const image_hash = await uploadData(image);
    const image_url = IPFS_BASE_URL + image_hash;
    const content = makeData(address,name,description,image_url,region,special)
    let tx_hash = await uploadData(JSON.stringify(content))
    const content_url = IPFS_BASE_URL+tx_hash;
    if(tx_hash !== undefined){
        console.log(content_url)
    } else {
        console.log("Issue on uploading file")
    }
    return content_url
}

async function uploadArtist(address,image,name,description,url){
    const image_hash = await uploadData(image);
    const image_url = IPFS_BASE_URL + image_hash;
    const content = {address,image:image_url,name,description,url};
    let tx_hash = await uploadData(JSON.stringify(content))
    const content_url = IPFS_BASE_URL+tx_hash;
    if(tx_hash !== undefined){
        console.log(content_url)
    } else {
        console.log("Issue on uploading file")
    }
    return content_url
}

// async function test(){
//     const file = fs.readFileSync("./test.txt")
//     let tx_hash = await uploadData("1234")
//     const image_uri = IPFS_BASE_URL+tx_hash

//     const content = makeData("owner","name","description",image_uri,'0010001',true)
//     console.log(content)
//     tx_hash = await uploadData(JSON.stringify(content))
//     console.log(IPFS_BASE_URL+tx_hash)
// }

export default {uploadContent,uploadArtist}