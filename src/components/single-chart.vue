<template>
    <div class="charts">
      <div class="column">
        <div class="block">
          <div 
            class="blockItem item-5" 
            :style="{'height': performCalcProp + '%'}"
            :class="{'checked' :  performCalc}"
            >
          </div> 

          <div 
            class="blockItem item-4" 
            :style="{'height': performCalcProp + '%'}"
            :class="{'checked' :  test }"
            >
          </div> 
          
           <div
             class="blockItem item-3" 
             :style="{'height': bonusCalcProp + '%'}"
             :class="{'checked' : testBonus }"
             >
          
            
            </div>
           <div 
            class="blockItem item-2" 
            :style="{'height': baseCalcProp + '%'}"
            :class="{'checked' : baseCalc}"
            >
          
          </div>
          <div 
            class="blockItem item-1"  :style="{'height': salayCalcProp + '%'}"
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
        salayCalcProp: String,
        baseCalcProp: String,
        extraCalcProp: String,
        performCalcProp: String,
        bonusCalcProp: String,
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