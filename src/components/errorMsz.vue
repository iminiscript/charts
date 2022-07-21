<template>
    <dialog open>
        <slot  />
    </dialog>
</template>

<script>
    export default {
        name: 'errorMsz'
    }
</script>

<style scoped>
    dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 400px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.9);
        margin: 50px auto;
        z-index: 9;
        color: #fff;
    }

    h2 {
        color: #fff;
        font-size: 32px;
    }
    p {
        font-size: 16px;
    }
</style>