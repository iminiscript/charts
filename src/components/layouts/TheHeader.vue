<template>
    <header>
        <h1>{{ headerTitle }}</h1>
    </header>
</template>

<script>
    export default {
        props: {
            headerTitle: {
                type: String,
                default: 'Title'
            },
        },
    }
</script>

<style scoped>
header {
    background: rgb(241, 166, 40);
    width: 100%;
}

h1 {
    font-size: 24px;
    text-align: center;
    padding: 20px;
    color: #ffffff;
}

</style>