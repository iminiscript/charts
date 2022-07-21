<template>
    <base-wrapper>
    <form @submit.prevent="addData">
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" ref="titleInput" />
        </div>
         <div>
            <label for="desc">Desc</label>
            <input type="text" id="desc" ref="descInput" />
        </div>
         <div>
            <label for="url">URL</label>
            <input type="text" id="url" ref="urlInput"/>
        </div>
        <div>
            <button type="submit">Add Data</button>
        </div>
    </form>
    </base-wrapper>

    
      <teleport to='#app'>
        <the-error-msz v-if="userInputData">
            <h2>Please enter some Value</h2>
            <p> This is Modal Dialog</p>
            <button @click="closeModal">Close Modal</button>
        </the-error-msz>
      </teleport>
</template>

<script>
import TheErrorMsz from '@/components/UI/TheErrorMsz.vue';
import BaseWrapper from '@/components/UI/BaseWrapper.vue'

export default {
    components: {
        TheErrorMsz,
        BaseWrapper
    },
    data() {
        return {
            userInputData: false,
        }
    },
    inject: {
        addDataResc: {
            type: Object
        },
    },
    methods: {
        
        addData() {
            const addTitle = this.$refs.titleInput.value;
            const addDesc = this.$refs.descInput.value;
            const addUrl = this.$refs.urlInput.value;

            console.log(addTitle);

            if( addTitle.trim() === '' || addDesc === '' || addUrl === '' ) {
                this.userInputData = true;
                return false;
            }


                fetch('https://vueapp-local-default-rtdb.firebaseio.com/survey.json' , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({
                        name: addTitle, desc: addTitle , url: addUrl 
                    }),
                }).then(
                    (data)=> {
                        console.log('Sucess', data);
                        this.addDataResc(addTitle,addTitle, addUrl );
                        
                    }).catch((error) => {
                        console.log('Error', error)
                    });
            
                    
        },
        closeModal() {
            this.userInputData = false;
        }
    },
}
</script>

<style scoped>
form {
    width: 100%;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 20px;
    margin: 30px auto;
}
input {
    width: 60%;
}
label {
    min-width: 50px;
    display: inline-block;
} 
</style>
