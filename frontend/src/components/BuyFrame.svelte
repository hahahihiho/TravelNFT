<script>
    export let src;
    export let item;
    import tx from '../lib/tx_module'
    import InnerModal from '../modals/market_buy/InnerModal.svelte';
    import Modal from './Modal2.svelte';

</script>

<div class="frame">
    <img {src} alt="">
    <div class="button">
        <Modal>
            <InnerModal item = {item}>
                <span>Buy</span>
            </InnerModal>
        </Modal>
    </div>
</div>

<style>
    div.frame{
        /* flex: 0 0 25%; */
    }
    img{
        width: 14rem;
        height: 20rem;
        border-radius: 10px;
    }
    .button {
        width: 14rem;
        cursor: pointer;
        background-color: deeppink;
        color: white;
        border-radius: 10px;
        border: none;
    }
</style>