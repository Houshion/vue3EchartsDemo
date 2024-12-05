<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
import { getEchartsData } from "~/api";
let bljzOption;
let myEcharts = echarts;
let pieData = [];

onMounted(() => {
  getData();
});

let getData = async () => {
  await nextTick();
  const { data } = await getEchartsData();
  pieData = data.chartsPie;
  console.log("pieDatadatadatadatadata", pieData);
  callData();
};
let callData = () => {
  bljzOption = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "bljzPie",
        type: "pie",
        radius: ["45%", "80%"],
        data: pieData.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  setEcharts();
};
let setEcharts = () => {
  let chart = myEcharts.init(document.getElementById("bljz", "purple-passion"));
  console.log("----------",bljzOption)
  bljzOption && chart.setOption(bljzOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="bljz"
    :option="bljzOption"
    chartHeight="200px"
  ></BaseEcharts>
</template>
