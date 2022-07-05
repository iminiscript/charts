<template>
  <div class="chartColumns">

    <div class="userRange chartColumnsItem">
      <span>Extra Income: {{ extraUser }}%</span>
      <input type="range" min="0" max="1000" step="1" v-model.number="extra_amount"> 
    </div>

    <div class="userDrop chartColumnsItem">
      <div>Selected: {{ selected }}x : Money {{ userSelect }}</div>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option value="1">1x</option>
        <option value="2">2x</option>
        <option value="10">10x</option>
        <option value="20">20x</option>
      </select>
    </div>  

    <!-- <input type="checkbox" id="10" value="10" v-model="checkedNumbers">
    <label for="jack">10</label>
  <input type="checkbox" id="20" value="20" v-model="checkedNumbers">
  <label for="john">20</label>
  <input type="checkbox" id="30" value="30" v-model="checkedNumbers">
  <label for="mike">30</label>
   <span>Checked numbers: {{ checkedNumbers }}</span> -->

    <div class="useInput chartColumnsItem">
      <div class="userValue">
        <label>
          <input id="text" type="checkbox" :value="salry_amount" v-model="salaryIncome">
          Salary Income - {{ salry_amount }}</label>
      </div>
      <div class="userValue">
        <label><input type="checkbox" v-model="basicIncome">Basic Income - {{ userSelect }}</label>
      </div>
      <div class="userValue">
        <label><input type="checkbox" v-model="extraIncome">Extra Income -  {{ extra_amount }}</label>
      </div>
      <div class="userValue">
        <label><input type="checkbox" v-model="performanceIncome">Performance Income - {{ performance_amount }}</label>
      </div>
      <div class="userValue">
        <label><input type="checkbox" v-model="bonusIncome">Bonus Income - {{ bonus_amount }}</label>
      </div>

      <!-- <div @click="togglePurchased()" :class="{'checked' : completed}"> {{ salry_amount }}</div> -->
    </div> 
  
    <div class="charts chartColumnsItem">
      <div class="column">
        <div class="block">
          <!-- <div class="blockLabel">{{ totalSalry }}</div> -->
          <div v-show="salaryIncome" 
            :value="salry_amount"
            class="blockItem item-1"  :style="{'height': salaryCalc + '%'}"
            :class="{'checked' : completed}"
            >
             {{ salry_amount}}
            
          </div>
          <div v-if="basicIncome"
            :value="base_amount"
            class="blockItem item-2" 
            :style="{'height': baseCalc + '%'}
            
          ">
          {{ userSelect }}
          </div>
          <div v-if="extraIncome"
              :value="extra_amount"
              class="blockItem item-3" 
              :style="{'height': extraCalc + '%'}">
            {{ extra_amount }}
          </div>
          <div v-if="performanceIncome" 
            class="blockItem item-4" 
            :style="{'height': performCalc + '%'}">
            {{ performance_amount }}
          </div> 
          <div v-if="bonusIncome"
             class="blockItem item-5" 
             :style="{'height': bonusCalc + '%'}">
          
            {{ bonus_amount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'charts',
  props: {
    msg: String
  },
  data() {
    return {
      salry_amount: 1000,
      base_amount: 600,
      bonus_amount: 100,
      extra_amount: 1000,
      performance_amount: 200,
      total: 3000,
      salaryIncome: true,
      basicIncome: true,
      extraIncome: true,
      performanceIncome: true,
      bonusIncome: true,
      checkedNumbers: [],
      selected: 1,
      completed: true

    }
  },
  computed: {

    totalSalry() {
      const totalAmt = this.salry_amount + this.base_amount + this.bonus_amount + this.extra_amount + this.performance_amount;

      return totalAmt;
    },
    salaryCalc() {
        const salary = (this.salry_amount / this.total) * 100;
        return salary;
    },
    baseCalc() {
      const base = (this.userSelect / this.total) * 100;
      return base;
    },
    extraCalc() {
      const extra = (this.extra_amount / this.total) * 100;
      return extra;
    },
    extraUser(){
      return this.extra_amount / 100
    },
    performCalc() {
      const perf = (this.performance_amount / this.total) * 100;
      return perf;
    },
    bonusCalc() {
      const bonus = (this.bonus_amount / this.total) * 100;
      return bonus;
    },

    userSelect() {
      return this.base_amount * this.selected;
    },
    sum() {
    	return this.checkedNumbers.reduce(function (a, b) {
      	return parseInt(a) + parseInt(b);
      }, 0);
    },
    result() {
        return parseInt(this.number1) + parseInt(this.number2);

    }

  },
  methods: {
    togglePurchased() {
      this.completed = !this.completed;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chartColumnsItem {
    display: flex;
    flex-flow: column;
    text-align: left;
    width: 15%;
}
.userValue {
  margin-bottom: 20px;
}
.chartColumns {
  display: flex;
  justify-content: space-evenly;
}

input {
  margin-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.chartColumns{
  display: flex;
  flex-flow: row wrap;
}
.block {
  bottom: 0;
  display: flex;
  overflow: visible;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  transition: all .05s;
}

.blockItem {
  color: #fff;
  font-size: 14px;
  text-align: center;
}
.charts {
  width: 25%;
  margin: 25px;
}
.item-1 {
  background-color: red;
}
.item-2 {
  background-color: blue;
  height: 10%;
}
.item-3 {
  background-color: green;
  height: 25%;
}
.item-4 {
  background-color: black;
  height: 15%;
}
.item-5 {
  background-color: orange;
  height: 10%;
}
</style>
