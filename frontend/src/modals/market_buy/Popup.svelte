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
    <p>{item.tokenId} meta </p>
    <p class="buy"> Buy </p>
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
  p.buy{
    cursor: pointer;
    background-color: deeppink;
    color: white;
    border-radius: 10px;
    border: none;
    font-size : 1.7rem;
    text-align:center;
  }
</style>

