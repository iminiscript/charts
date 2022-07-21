<template>
  <TheHeader headerTitle="VUE JS Learning" />
  <router-view>
  </router-view>

</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue';
import charts from './components/charts.vue'
// import tabOne from './components/tabOne.vue'
// import tabTwo from './components/tabTwo.vue'
import TheTabsData from '@/components/LearningResources/TheTabsData.vue';
// import TheForm from './components/TheForm.vue';

export default {
  name: 'App',
  components: {
    charts,
    TheTabsData,
    TheHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.dynamicCompo {
  border-bottom: 1px solid;
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
