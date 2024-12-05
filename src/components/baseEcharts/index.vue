<template>
  <div class="echarts-box">
    <div
      :id="chartsId"
      class="myEcharts"
      :style="`height: ${chartHeight}`"
    ></div>
  </div>
</template>
  <script lang='ts' setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, defineEmits, defineProps } from "vue";

let myEcharts = echarts;

onMounted(() => {
  console.log("chartsId", props.chartsId);
  initChart();
});

onUnmounted(() => {
  // myEcharts.dispose();
});

const props = defineProps({
  chartHeight: {
    type: String,
    required: true,
  },
  option: {
    type: Object,
    required: true,
  },
  chartsId: {
    type: String,
    required: true,
  },
});

let initChart = () => {
  let chart = myEcharts.init(
    document.getElementById(props.chartsId, "purple-passion")
  );
  props.option && props.option && chart.setOption(props.option);

};
</script>
  <style lang="scss">
.myEcharts {
  width: 100%;
}
</style>