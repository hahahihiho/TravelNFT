
async function multipart_post(url,data){
    console.log("local_api_data",data);
    const formData = new FormData();
    formData.append("file",data)
    console.log(formData)
    const res = await fetch(url,{
        method : 'POST',
        headers : {'Content-Type': 'multipart/form-data'},
        body : formData
    })
    console.log("local_api_res",res)
    return res;
}

async function json_post(url,body){
    console.log("local_api body : ",body);
    console.log("string",JSON.stringify(body))
    const res = await fetch(url,{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(body)
    })
    return res;
}

export default {json_post,multipart_post};