<template>
    <div>
        <h2> {{ tabData }}</h2>
        <input type="text" ref="goal">
        <button @click="userInput">Click Me</button>
        <teleport to='#app'>
            <errorMsz v-if="userInputData">
                <h2>Please enter some Value</h2>
                <p> This is Modal Dialog</p>
                <button @click="closeModal">Close Modal</button>
            </errorMsz>
        </teleport>
    </div>
</template>

<script>
    import errorMsz from './errorMsz.vue';

    export default {
        name: 'TabOne',
        components: {
            errorMsz
        },
        data() {
            return {
                tabData: 'Tab One',
                userInputData: false
            }
        },
        methods: {
            userInput() {
                const inputData = this.$refs.goal.value;
                if (inputData === '') {
                    this.userInputData = true;
                }
            },
            closeModal() {
                this.userInputData = false;
            }
        }
    }
</script>

<style scoped>

</style>