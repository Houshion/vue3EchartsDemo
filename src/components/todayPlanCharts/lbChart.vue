<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
import { getLBDataList } from "~/api/index";
const nowTime = new Date();
const year = nowTime.getFullYear();
const month = nowTime.getMonth() + 1;
const date = nowTime.getDate();
const today = `${year}-${Number(month) < 10 ? "0" + month : month}-${
  Number(date) < 10 ? "0" + date : date
}`;

let lbChartOption;
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
  lbChartOption = {
    title: {
      text: today,
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
    document.getElementById("lbChart", "purple-passion")
  );
  lbChartOption && chart.setOption(lbChartOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="lbChart"
    :option="lbChartOption"
    chartHeight="300px"
  ></BaseEcharts>
</template>
