<template>
    <div class="charts">
      <div class="column">
        <div class="block">
          <div 
            class="blockItem item-5" 
            :style="{'height': performance_bonus_prop + '%'}"
            :class="{'checked' :  performCalc}"
            >
          </div> 

          <div 
            class="blockItem item-4" 
            :style="{'height': target_bonus_prop + '%'}"
            :class="{'checked' :  test }"
            >
          </div> 
          
           <div
             class="blockItem item-3" 
             :style="{'height': sign_in_bonus_prop + '%'}"
             :class="{'checked' : testBonus }"
             >
          
            
            </div>
           <div 
            class="blockItem item-2" 
            :style="{'height': equity_prop + '%'}"
            :class="{'checked' : baseCalc}"
            >
          
          </div>
          <div 
            class="blockItem item-1"  :style="{'height': base_salary_prop + '%'}"
            :class="{'checked' : baseSalary}"
            >
            
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {
    name: 'SingleChart',
    props: {
        id: String,
        base_salary_prop: String,
        equity_prop: String,
        target_bonus_prop: String,
        performance_bonus_prop: String,
        sign_in_bonus_prop: String,
    },

    data() {
    
    }, 
    computed: {
      baseSalary() {
        return this.$store.state.baseSalary;
      },
      baseCalc() {
        return this.$store.state.baseCalc;
      },
      bonusCalc() {
        return this.$store.state.bonusCalcs;
      },
      extraClass() {
        return this.$store.state.extraData;
      },
      performCalc() {
        return this.$store.state.performCalc;
      },
      testBonus(){
        return this.$store.state.bonusTest;
      },
      test(){
        return this.$store.state.test;
      },
    },
}
</script>