<template>
  <charts />
    <div class="dynamicCompo">
    <!-- Dynamic Component -->
    <button @click="setChangeTab('tabOne')">Tab One</button>
    <button @click="setChangeTab('tabTwo')">Tab Two</button>
    <keep-alive>
      <component :is="changeTab"></component>
    </keep-alive>
    </div>
</template>

<script>
import charts from './components/charts.vue'
import tabOne from './components/tabOne.vue'
import tabTwo from './components/tabTwo.vue'

export default {
  name: 'App',
  components: {
    charts,
    tabOne,
    tabTwo
  },
  data() {
    return {
      changeTab: 'tabOne'
    }
  },
  methods: {
    setChangeTab(tab) {
      this.changeTab = tab
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dynamicCompo {
  margin: 50px auto;
  border-top: 1px solid;
  padding: 20px;
  text-align: center;
}

button {
  background-color: rgb(68, 179, 105);
  color: #fff;
  padding: 10px 30px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid rgb(68, 179, 105);
  border-radius: 4px;
}

input {
  padding: 10px 30px;
  margin: 10px;
  border: 1px solid rgb(68, 179, 105);
  border-radius: 4px;
  font-size: 16px;
}
</style>
