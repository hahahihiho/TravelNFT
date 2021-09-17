<script>
    import InnerModal from '../modals/wallet/InnerModal.svelte';
    import Modal from '../components/Modal.svelte';
    import metamask_img from 'images/metamask.png'
</script>

<Modal>
    <InnerModal>
        <img src={metamask_img} alt="metamask img"><span>Metamask</span>
    </InnerModal>
</Modal>

<style>
    img{
        height: 50px;
        width: 50px;
        padding-top: 10px;
        padding-right: 10px;
    }
</style>