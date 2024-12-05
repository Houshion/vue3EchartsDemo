<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
import { getLBDataList } from "~/api/index";

let monthMTDOption;
let myEcharts = echarts;
let xData = [],
  yData = [];

onMounted(() => {
  getData();
});

let getData = async () => {
  await nextTick();
  const { data } = await getLBDataList();
  console.log("data.data", data);
  data.list.forEach((item) => {
    xData.push(item.lb)
    yData.push(item.total)
  });
  callData();
};

let callData = () => {
  monthMTDOption = {
    title: {
      text: "本月MTD(月累计)",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: xData,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        label: {
          show: true,
          position: "top",
          backgroundColor: "#ffffff",
          padding: 5,
          borderRadius: 5,
        },
        itemStyle: {
          color: "#299789",
        },
        name: "Direct",
        type: "bar",
        data: yData,
      },
    ],
  };
  setEcharts();
};

let setEcharts = () => {
  let chart = myEcharts.init(
    document.getElementById("monthMTD", "purple-passion")
  );
  monthMTDOption && chart.setOption(monthMTDOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="monthMTD"
    :option="monthMTDOption"
    chartHeight="300px"
  ></BaseEcharts>
</template>
