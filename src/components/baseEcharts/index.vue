<template>
  <div class="echarts-box">
    <div
      id="myEcharts"
      class="myEcharts"
      :style="`height: ${chartHeight}`"
    ></div>
  </div>
</template>
  <script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, defineEmits, defineProps } from "vue";

let myEcharts = echarts;

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myEcharts.dispose();
});

defineProps({
  chartHeight: {
    type: String,
    required: true,
  },
  option: {
    type: Object,
    required: true,
  },
});

let initChart = () => {
  let chart = myEcharts.init(
    document.getElementById("myEcharts", "purple-passion")
  );
//   option && chart.setOption(option);
};
</script>
  <style lang="scss">
.myEcharts {
  width: 100%;
}
</style>