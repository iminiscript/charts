<template>
    <dialog open>
        <div class="modal">
            <slot  />
        </div>
    </dialog>
</template>

<script>
    export default {
        name: 'TheErrorMsz'
    }
</script>

<style scoped>
    dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.7);
        z-index: 9;
    }

    .modal {
        position: absolute;
        width: 500px;
        height: 300px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
         top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: #FF9494;
    }

    h2 {
        color: #fff;
        font-size: 40px;
    }
    p {
        font-size: 16px;
    }
</style>