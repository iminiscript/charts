<template>
    <div class="blockItem item-3"  :style="{'height': salary + '%'}">
    </div>
</template>

<script>
    export default {
        name: 'TargetBonus',
        props: {
            bonus: String,
        },
        data() {
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>