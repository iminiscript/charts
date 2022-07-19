<template>
    <div class="blockItem item-2"  :style="{'height': benefits + '%'}">
    </div>
</template>

<script>
    export default {
        name: 'Benefits',
        props: {
            benefits: String,
        },
        data() {
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>