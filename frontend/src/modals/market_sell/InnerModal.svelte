<script>
    import { getContext } from 'svelte';
    import Popup from "./Popup.svelte";
  
    const { open } = getContext('simple-modal');
  
    export const message = "No Message";
    export let item = {};
    const showPopup = () => {
          open(Popup, {message : message, item: item});
    };
</script>
  
  <section>
    <div id="button" on:click={showPopup}>
    <slot></slot>
    </div>
      <br/>
  </section>
  
  <style>
      section {
          text-align: center;
      }
      #button{
          padding: 10px 30px;
          border-radius: 10px;
          display: inline-block;
          font-size: 1.7rem;
          cursor: pointer;
      }
  </style>