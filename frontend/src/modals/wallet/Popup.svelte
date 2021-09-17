<script>
  import wallet from '../../lib/wallet';
  import { goto } from '@sapper/app';
  const metamask_download_link = "https://metamask.io/"

  async function connectWallet(){
    let accounts = await wallet.connect();
    if(wallet.isConnected()){
      goto("/")
    }
  }

</script>

<h2>
  {#if wallet.isMetamask()}
    <p class="connect" on:click={connectWallet}>Connect Metamask</p>
  {:else}
    <p>You don't have Metamask</p>
    <a href={metamask_download_link}>Download Link</a>
  {/if}
</h2>

<style>
  h2 {
        font-size: 2rem;
        text-align: center;
    }
  p.connect{
    cursor: pointer;
  }
</style>

