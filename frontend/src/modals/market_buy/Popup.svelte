<script>
  import wallet from '../../lib/wallet';
  import tx_module from '../../lib/tx_module'
  import { goto } from '@sapper/app';
  const metamask_download_link = "https://metamask.io/"

  async function connectWallet(){
    let accounts = await wallet.connect();
    if(wallet.isConnected()){
      goto("/")
    }
  }
  
  async function buy(){
    const entity = item;
    tx_module.buyToken(entity)
    goto("/market")
  }

  export let item={};
</script>
<div class="wrapper">
  <span class="left">
    <img src = {item.image} alt="">
  </span>
  <span class="right">
    <p>region : {item.region}</p>
    <p class="address">owner : {item.owner}</p>
    <p>{item.name}</p>
    <p>{item.description}</p>
    <p>{item.price} meta </p>
    <button class="order" on:click={buy}> Buy </button>
  </span>
</div>


<style>
  div.wrapper{
    display:flex;
  }
  span.left{
    display:block;
  }
  span.right{
    margin-left:2rem;
    display:block;
  }
  p.address{
    font-size:1rem;
  }
  p{
    font-size : 1.7rem;
    text-align : left;
  }
  button.order{
    cursor: pointer;
    color: white;
    border-radius: 10px;
    border: none;
    font-size : 1.7rem;
    background-color: deeppink;
    text-align: center;
    width:100%;
    height:3rem;
  }
</style>

