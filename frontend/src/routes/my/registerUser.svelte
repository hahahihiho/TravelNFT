<script>
    import ipfs from '../../lib/ipfs_client';
    import tx_module from '../../lib/tx_module';

    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    
    let selectedAddress;
    onMount(async () => {
        const wallet = await import('../../lib/wallet')
        selectedAddress = wallet.default.getSelectedAddress()
    })


    let fileUrl = "";
    let uploadObj = {};
    async function addFile(e){
        let files = e.target.files;
        let filesArr = Array.prototype.slice.call(files);

        filesArr.forEach(function(f) {
            if(!f.type.match("image.*")) {
                alert("확장자는 이미지 확장자만 가능합니다.");
                return;
            }
            var reader = new FileReader();
            console.log(e.target.result);
            reader.onload = function(e) {
                fileUrl = e.target.result
            }
            reader.readAsDataURL(f);
        });
        uploadObj.file = files[0]
    }

    async function register(){
        console.log("uploading Object", uploadObj);
        const {name,desc:description,file:image,sns_url} = uploadObj;
        const address = selectedAddress;
        let url = await ipfs.uploadArtist(address,image,name,description,sns_url);
        console.log("registered url", url)
        goto("/")
    }
</script>

<div class="container">
    <form on:submit|preventDefault={register}>
        <div class="wrapper">
            <input value={selectedAddress} disabled>
            <h2>Register User</h2>
            <input type="file" name="Asset" on:change={(e)=>addFile(e)}>
            <img id='img' width="300" src={fileUrl} alt="">
            <input placeholder="Name" bind:value={uploadObj.name}>
            <textarea placeholder="Description" bind:value={uploadObj.desc}></textarea>
            <input placeholder="SNS URL" bind:value={uploadObj.sns_url}>
            <button type="submit">Register</button>
        </div>
    </form>
</div>

<style>
    div.container{
        text-align: center;
        background-color: #f1f1f1;
        padding-top: 2rem;
        padding-left: 10rem;
        padding-right: 10rem;
        padding-bottom: 2rem;
    }
    div.wrapper{
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px
    }
    input{
        height: 3rem;
        border-radius: 10px;
    }
    textarea{
        height: 4rem;
        border: 2px solid;
        border-radius: 10px;
    }
    button{
        text-align: center;
        height:3rem;
    }

</style>