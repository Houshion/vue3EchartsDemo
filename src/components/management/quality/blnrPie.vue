<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
import { getEchartsData } from "~/api";
let blnrOption;
let myEcharts = echarts;
let pieData = [];

onMounted(() => {
  getData();
});

let getData = async () => {
  await nextTick();
  const { data } = await getEchartsData();
  pieData = data.chartsPie
  console.log("pieDatadatadatadatadata",pieData)
  callData();
};
let callData = () => {
blnrOption = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'blnrPie',
      type: 'pie',
      radius: ['45%', '80%'],
      data: pieData.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
setEcharts();
}
let setEcharts = () => {
  let chart = myEcharts.init(document.getElementById("blnr", "purple-passion"));
  console.log("++++++++++",blnrOption)
  blnrOption && chart.setOption(blnrOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="blnr"
    :option="blnrOption"
    chartHeight="200px"
  ></BaseEcharts>
</template>
