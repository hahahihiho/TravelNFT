<script>
    import Map from '../../modules/map/Map.svelte';

    import Frame from '../../components/SellFrame.svelte'
    import { onMount } from 'svelte';

    let items = [];
    async function render() {
        const tx_module = await import('../../lib/tx_module')
        const data = await tx_module.default.getMyNfts()
        console.log(data)
        items = data;
    }

    onMount(async () => {
        render()
    })
</script>

<!-- <Map lat={38} lon={125} zoom={4}> -->
<Map lat={30} lon={155} zoom={1.7}>
</Map>
<br>
<hr>
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
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>