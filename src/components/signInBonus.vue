<template>
    <div class="blockItem item-4"  :style="{'height': signInBonus + '%'}">
    </div>
</template>

<script>
    export default {
        name: 'SignInBonus',
        props: {
            signInBonus: String, 
        },
        data() {
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>