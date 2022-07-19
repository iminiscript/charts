<template>
    <div class="blockItem item-base-salary"  :style="{'height': salary + '%'}">
    </div>
</template>

<script>
    export default {
        name: 'BaseSalary',
        props: {
            salary: Number,
        },
        data() {
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>