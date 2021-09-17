<script>
    import { getContext } from 'svelte';
    import Popup from "./Popup.svelte";
  
    const { open } = getContext('simple-modal');
  
    export const message = "No Message";
    const showPopup = () => {
          open(Popup, {message : message});
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
          padding-top: 2rem;
      }
      #button{
          padding: 10px 30px;
          border: 1px solid;
          border-radius: 10px;
          display: inline-block;
          font-size: 3rem;
          cursor: pointer;
      }
  </style>