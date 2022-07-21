<template>
  <div class="chartColumns">
    <div class="chartColumnsItem chartColumnsOne">
      <div class="userDrop">
        <div>Selected: {{ selected }}x : Money {{ userSelectEquity }}</div>

        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="10">10x</option>
          <option value="20">20x</option>
        </select>
      </div>  

      <div class="useInput">
        <div class="userValue">

          <div class="userItem" 
            @click="toggleperformCalcProp()" 
            :class="{'checked': Benefits }"
            >
            <span class="userItemBtn userItemBtn--5"></span>
            Benefits  <br/>
            {{ performance_amount }}
          </div>

          <div class="userItem" 
            @click="toggleTestNew()"
            :class="{'checked': TargetBonus }"
            >
              <span class="userItemBtn userItemBtn--4"></span>
            Target Bonus  <br/>
            {{ extraCalcDisplay }}
          </div>

          <div class="userItem" 
            @click="toggleTest()"
            :class="{'checked': SingInBonus }"
            >
               <span class="userItemBtn userItemBtn--3"></span>
            Sign-on Bonus <br/>
            {{ bonus_amount }}
          </div>


          <div class="userItem" 
            @click="togglebaseCalc()"
            :class="{'checked': Equity }"
            >
               <span class="userItemBtn userItemBtn--2"></span>
            Equity <br/>
            {{ userSelectEquityDisplay}}
          </div>

          <div class="userItem" 
            @click="toggleSalary()"
            :class="{'checked': BaseSalary }"
            >
               <span class="userItemBtn userItemBtn--1"></span>
            Base Salary <br/>
            {{ base_salary_amount }}
          </div>
        </div>
      </div> 
    </div>

    <div class="chartColumnsItem">
       
      <div class="singleChart">
        <singleChart 
        :equity_prop = userSelectEquity
        :base_salary_prop = salaryCalc
        :sign_in_bonus_prop = signInBonus
        :target_bonus_prop="extraCalc"
        :performance_bonus_prop="performCalc"
        v-bind="propsToPass"
        
        >
        
      </singleChart>

      <singleChart 
        :equity_prop = userSelectEquity
        :base_salary_prop = salaryHike
        :target_bonus_prop="extraCalc"
        :performance_bonus_prop="performCalc"
        
        >
      </singleChart>

      <singleChart 
        :equity_prop = userSelectEquity
        :base_salary_prop = salaryHikeYear
        :target_bonus_prop="extraCalc"
        :performance_bonus_prop="performCalc"
      
        
        >
      </singleChart>

      <singleChart 
        :equity_prop = userSelectEquity
        :base_salary_prop = salaryHikeYearFinal
        :target_bonus_prop="extraCalc"
        :performance_bonus_prop="performCalc"
      
        
        >
      </singleChart>
    </div>

    <div class="userRange">
      <div class="userRangeItem">
        <span>Annual base salary increase: {{  percHikeCal }}%</span>
        <input class="yearlyBonus" type="range" min="0" max="1000" step="1" v-model.number="hike"> 
      </div>
      <div class="userRangeItem">
        <span>Target bonus:  {{ extraUser }}%</span>
        <input type="range" min="0" max="1000" step="1" v-model.number="extra_amount"> 
      </div>
    </div>
  
  </div>
  </div>
</template>

<script>
import singleChart from './single-chart.vue';

export default {
  name: 'charts',
  components: {
    singleChart
  },
  data() {
    return {
      base_salary_amount: 1000,
      base_amount: 600,
      bonus_amount: 100,
      extra_amount: 300,
      performance_amount: 200,
      total: 2200,
      salaryIncome: true,
      basicIncome: true,
      extraIncome: true,
      performanceIncome: true,
      bonusIncome: true,
      checkedNumbers: [],
      selected: 1,
      hike:0,
      text: 'Hello',

    }
  },
  computed: {

    salaryCalc() {
        const salary = (this.base_salary_amount / this.total) * 100;
        const salaryFix = ( salary * 500 ) / 100
        return salaryFix;
    },
    salaryHike(){
      const percHike = this.hike / 100;
      const yearData =  (percHike / 100 ) * this.salaryCalc;
      const finalHike = yearData + this.salaryCalc;
      return finalHike;  
    },

    salaryHikeYear(){
      const percHikeYear = this.hike / 100;
      const yearDataYear =  (percHikeYear / 100 ) * this.salaryHike;
      const finalHikeYear = yearDataYear + this.salaryHike;
      return finalHikeYear;  
    },

    salaryHikeYearFinal(){
      const percHikeYearFinal = this.hike / 100;
      const yearDataYearFinal =  (percHikeYearFinal / 100 ) * this.salaryHikeYear;
      const finalHikeYearFinal = percHikeYearFinal + this.salaryHikeYear;
      return finalHikeYearFinal;  
    },

    percHikeCal() {
      return this.hike / 100;
    },
 
    extraCalc() {
      const extra = (this.extra_amount / this.total) * 100;
      const extraFix = ( extra * 500 ) / 100;
      return extraFix;
    },
    extraCalcDisplay() {
      const extraDisplay = this.extraCalc.toFixed();
      return extraDisplay;
  
    },
    extraUser(){
      return this.extra_amount / 100
    },
    performCalc() {
      const perf = (this.performance_amount / this.total) * 100;
      const perfFix = ( perf * 500 ) / 100;
      return perfFix;
    },
    signInBonus() {
      const bonus = (this.bonus_amount / this.total) * 100;
      const bonusFix = ( bonus * 500 ) / 100;
      return bonusFix;
    },

    userSelectEquity() {
      const user =  (this.base_amount * this.selected ) / 100;
      const userFix = ( user * 500 ) / 100;
      return userFix;

    },

    userSelectEquityDisplay() {
      return ( this.base_amount * this.selected ) 
    },

    Benefits() {
      return this.$store.state.performCalc;
    },
    TargetBonus() {
      return this.$store.state.test;
    },
    SingInBonus() {
      return this.$store.state.bonusTest;
    },
    Equity() {
      return this.$store.state.baseCalc;
    },
    BaseSalary() {
      return this.$store.state.baseSalary;
    }


    // sum() {
    // 	return this.checkedNumbers.reduce(function (a, b) {
    //   	return parseInt(a) + parseInt(b);
    //   }, 0);
    // },
    // result() {
    //     return parseInt(this.number1) + parseInt(this.number2);
    // }

  },
  methods: {
    toggleSalary() {
        this.$store.state.baseSalary = !this.$store.state.baseSalary;
    },
    togglebaseCalc() {
        this.$store.state.baseCalc = !this.$store.state.baseCalc;
    },
    toggleperformCalcProp() {
        this.$store.state.performCalc = !this.$store.state.performCalc;
    },
    toggleTest() {
        this.$store.state.bonusTest = !this.$store.state.bonusTest;
    },
    toggleTestNew() {
        this.$store.state.test = !this.$store.state.test;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.userDrop {
  margin-bottom: 30px;
  width: 100%;
}

.userDrop select {
  width: 100%;
}
.userRange {
  display: flex;
  flex-flow: row;
}
.chartColumnsItem {
    display: flex;
    flex-flow: column;
    text-align: left;
    align-content: center;
}
.singleChart {
  display: flex;
  flex-flow: row;
}
.userValue {
  margin-bottom: 20px;
}
.chartColumns {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto 50px;

}

.chartColumnsOne {
  width: 30%;
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
  width: 120px;
  border: 1px solid transparent;
  overflow: hidden;
}

.blockItem {
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.blockItem.checked {
  height: 0 !important;
  visibility: hidden;
  opacity: 0;
}
.charts {
  width: 25%;
  margin: 25px;
}
.item-1 {
  background-color: rgb(68, 179, 105);
 
}
.item-2 {
  background-color: rgb(241, 166, 40);
  height: 10%;
}
.item-3 {
  background-color: rgb(107, 189, 212);

}
.item-4 {
  background-color: rgb(78, 132, 158);
  height: 15%;
}
.item-5 {
  background-color: rgb(149, 111, 250);
  height: 10%;
 
}
.useInput {
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px;
}
.userRangeItem {
  display: flex;
  flex-flow: column;
  width: 50%;
  margin: 0 10px;
}
.userItem {
  position: relative;
  margin-bottom: 20px;
}
.userItemBtn {
  width: 54px;
  height: 22px;
  border: 1px solid #ccc;
  background-color: #efefef;
  position: absolute;
  right: 0;
  border-radius: 100px;
}
.userItem {
  cursor: pointer;
}

.userItemBtn::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  right: 5px;
  top: 2px;
  border-radius: 50%;
  transition: all .2s;
}
.userItemBtn--5::after {
   background: rgb(149, 111, 250);
}
.userItemBtn--4::after {
   background: rgb(78, 132, 158);
}
.userItemBtn--3::after {
   background: rgb(107, 189, 212);
}
.userItemBtn--2::after {
   background: rgb(241, 166, 40);
}
.userItemBtn--1::after {
   background: rgb(68, 179, 105);
}
.userItem.checked {
  opacity: 0.5;
}

.userItem.checked .userItemBtn::after {
  transform: translate(-27px);
}
</style>
