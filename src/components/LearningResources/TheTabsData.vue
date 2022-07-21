<template>
     <div class="dynamicCompo">
        <!-- Dynamic Component -->
        <button @click="setChangeTab('StoredData')" :class="storedDataAct">Stored Data</button>
        <button @click="setChangeTab('AddData')" :class="addNewDataAct">Add New Data</button>
        <div v-if="isLoading" class="loading">
             <img alt="Vue logo" class="logo" src="@/assets/Loading_icon.gif"  />
        </div>
        <keep-alive v-else>
            <component :is="changeTab"></component>
        </keep-alive>
        <button :class="{'hide': getIsCompleted}" @click="fetchData">Fetch Latest Data</button>
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
                getIsCompleted: false,
                isLoading: true,
                error: null,
                storedLearningData: [
                    // {
                    //     id: 'yahoo',
                    //     title: 'Yahoo!!',
                    //     desc: 'This is Desc',
                    //     link: 'https://www.yahoo.com'
                    // },
                    // {
                    //     id: 'Google',
                    //     title: 'Google Baba!!',
                    //     desc: 'This is Desc of Google baba',
                    //     link: 'https://www.Google.com'
                    // }
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
                this.storedLearningData.unshift(newData);
                this.changeTab = 'StoredData';
            },
            deleteData(dataId) {
                const dataIndex = this.storedLearningData.findIndex(data => data.id === dataId );
                this.storedLearningData.splice(dataIndex, 1);
            },
            fetchData() {
                fetch('https://vueapp-local-default-rtdb.firebaseio.com/survey.json')
                .then(
                    (response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    }
                ).then((data) => {
                    console.log(data);
                    const getData = [];
                    for ( const id in data) {
                        getData.push({
                            id: id,
                            title: data[id].name,
                            desc: data[id].desc,
                            link: data[id].url
                        })
                    }
                    console.log(getData);

                    // const pushData = [];
                    // for ( const id in getData) {
                    //     pushData.push({
                    //         id: id,
                    //         title: getData[id].name,
                    //         desc: getData[id].desc,
                    //         link: getData[id].url
                    //     })
                    // }
                    // console.log(getData);
                    let pushElement;
                    for (let i = 0; i < getData.length; i++) {
                        pushElement = getData[i];
                        console.log(pushElement)
                        this.storedLearningData.unshift(pushElement);
                    }
                    this.getIsCompleted = true;
                    this.isLoading = false;
                    
                }).catch((error) => {
                    this.error = `We're facing some technical issue, Please try again later in sometime.`
                });
            }
        },
        mounted () {
            this.fetchData();
        },
    }
</script>

<style scoped>
button.Active {
    background-color: transparent;
    color: black;
}
.hide {
    display: none !important;
}

.loading img {
    width: 500px;
    height: 400px;
    max-width: 100%;
}
</style>