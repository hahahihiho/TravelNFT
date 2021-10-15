<script>
import Frame from '../components/Frame.svelte'

import { onMount } from 'svelte';



// const getData = async () => {
//     const url = "/api/metadium.json"
//     const res = await fetch(url,{
//         method: "GET"
//     })
//     return res
// }

// let data;
// onMount(async () => {
//     data = await getData();
//     console.log("done")
//     console.log('data',data);
// })

let items = [];
async function render() {
    const tx_module = await import('../lib/tx_module')
    const data = await tx_module.default.getAllNFTs()
    console.log(data)
    items = data;
}

onMount(async () => {
    render()
})
</script>


<div class="wrap">
    {#if items!==[]}
        {#each items as item}
            {#if item !== null}
            <Frame src={item.image} item={item}></Frame>
            {/if}
        {/each}
    {:else}
        <Frame src=""></Frame>
    {/if}
</div>


<style>
    div.wrap{
        margin-top: 2rem;
        height: 50rem;
        display: flex;
    }
</style>