<template>
    <div class="blockItem item-5"  :style="{'height': equity + '%'}">
    </div>
</template>

<script>
    export default {
        name: 'Equity',
        props: {
            equity: String,
        },
        data() {
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>