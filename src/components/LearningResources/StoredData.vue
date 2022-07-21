<template>
    <div class="LearningData">
      <base-wrapper>
        <learning-data 
          v-for="data in storedData" 
          :key="data.id"
          :desc="data.desc" 
          :link="data.link" 
          :title="data.title">

        </learning-data>
      </base-wrapper>
    </div>
</template>

<script>
import LearningData from '@/components/LearningResources/LearningData.vue';
import BaseWrapper from '@/components/UI/BaseWrapper.vue'

    export default {
        components: {
            LearningData,
            BaseWrapper
        },
        inject: {
            storedData: {
                type: Object 
            },
        },
    }
</script>

<style scoped>
.LearningData {
    padding: 50px;
}

</style>