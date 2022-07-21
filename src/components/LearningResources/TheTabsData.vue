<template>
     <div class="dynamicCompo">
        <!-- Dynamic Component -->
        <button @click="setChangeTab('StoredData')" :class="storedDataAct">Stored Data</button>
        <button @click="setChangeTab('AddData')" :class="addNewDataAct">Add New Data</button>
        <keep-alive>
            <component :is="changeTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredData from './StoredData.vue';
import AddData from './AddData.vue';

    export default {
        components: {
            StoredData,
            AddData
        },
        data() {
            return {
                changeTab: 'StoredData',
                storedLearningData: [
                    {
                        id: 'yahoo',
                        title: 'Yahoo!!',
                        desc: 'This is Desc',
                        link: 'https://www.yahoo.com'
                    },
                    {
                        id: 'Google',
                        title: 'Google Baba!!',
                        desc: 'This is Desc of Google baba',
                        link: 'https://www.Google.com'
                    }
                ]
            }
        },
         provide() {
            return {
                storedData: this.storedLearningData,
                addDataResc: this.addNewData,
                deleteResc: this.deleteData,
            };
        },
        computed: {
            storedDataAct() {
                return this.changeTab  === 'StoredData' ? 'Active' : null;
            },
            addNewDataAct() {
                return this.changeTab === 'AddData' ? 'Active' : null;
            }

        },
        methods: {
            setChangeTab(tab) {
                this.changeTab = tab
            },
            addNewData(addTitle, addDesc, addUrl) {
                const newData = {
                    id: new Date().toISOString(),
                    title: addTitle,
                    desc: addDesc,
                    link: addUrl,
                }
                console.log(newData);
                this.storedLearningData.unshift(newData);
                this.changeTab = 'StoredData';
            },
            deleteData(dataId) {
                const dataIndex = this.storedLearningData.findIndex(data => data.id === dataId );
                this.storedLearningData.splice(dataIndex, 1);
            }
        },
    }
</script>

<style scoped>
button.Active {
    background-color: transparent;
    color: black;
}
</style>