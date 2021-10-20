<script context="module">
    export async function preload(page,session){
        const res = await this.fetch('/data/countryRegionTable.json');
        const countryRegionTable = await res.json();
        return {countryRegionTable}
    }
</script>

<script>
    import ipfs_client from '../../lib/ipfs_client';
    import tx_module from '../../lib/tx_module';

    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    
    let selectedAddress;
    export let countryRegionTable;

    const cid = Object.keys(countryRegionTable)
    const countryTable = {};
    cid.forEach(id=>{
        countryTable[id] = countryRegionTable[id]['country'];
    })
    const regionHashList = {}
    cid.forEach(id => {
        let country = countryRegionTable[id]["country"];
        let temp_region_list = Object.values(countryRegionTable[id]['region'])
        regionHashList[country] = temp_region_list;
    })
    // console.log(regionHashList)
    
    const countryList = Object.values(countryTable);
    
    let selectedCountry = countryList[0];
    let regionList = regionHashList[selectedCountry];
    let selectedRegion;

    onMount(async () => {
        const wallet = await import('../../lib/wallet')
        selectedAddress = wallet.default.getSelectedAddress()
    })

    function onChangeCountry(){
        regionList = [...regionHashList[selectedCountry]];
    }

    function getCountryRegionCode() {
        let countryCode = Object.keys(countryTable).find(key => countryTable[key] === selectedCountry);
        let regionCode = Object.keys(countryRegionTable[countryCode]['region']).find(key => countryRegionTable[countryCode]['region'][key] === selectedRegion);
        const result = countryCode+regionCode;
        return result;
    }

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
        const {name,desc:description,file:image} = uploadObj;
        const address = selectedAddress;
        const region = getCountryRegionCode();
        const special = true;
        const content = {address,name,description,image,region,special}
        if(address && name && description && image && region && special){
            const url = await ipfs_client.uploadContent(content)
            console.log("registered url", url)
            const result = await tx_module.createSale(url);
            console.log(result);
            goto("/")
        }
        else {
            alert("Please fill the whole blank")
        }
    }

</script>

<div class="container">
    <form on:submit|preventDefault={register}>
        <div class="wrapper">
            <h2><b>TRAVEL NFT 발행 페이지 입니다.</b></h2>
            <span>내 계정 : {selectedAddress}</span>
            <p>- 아래 절차대로 NFT를 생성해 주세요</p>
            <p>1. 생성할 NFT를 넣어주세요. *</p>
            <input type="file" name="Asset" on:change={(e)=>addFile(e)}>
            <img id='img' width="300" src={fileUrl} alt="">
            <p>2. 작품 이름을 입력하세요. *</p>
            <input placeholder="Asset Name" bind:value={uploadObj.name}>
            <p>3. 해당 NFT를 소개할 수 있는 URI를 입력하세요.</p>
            <textarea placeholder="Asset Description" bind:value={uploadObj.desc}></textarea>
            <p>발행할 NFT의 나라 및 지역을 선택해 주세요.</p>
            <select bind:value={selectedCountry} on:change={onChangeCountry}>
                {#each countryList as country}
                    <option value={country}>{country}</option>
                {/each}
            </select>
            <select bind:value={selectedRegion}>
                {#each regionList as region}
                    <option value={region}>{region}</option>
                {/each}
            </select>
            <button type="submit"><b>Create ></b></button>
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
        text-align: left;
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
        cursor: pointer;
        color: white;
        background-color: rgba(68, 114, 196, 1);
        text-align: center;
        height:3rem;
    }

</style>