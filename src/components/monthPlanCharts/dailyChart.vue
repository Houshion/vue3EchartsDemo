<script setup>
import * as echarts from "echarts";
import { onMounted, onBeforeMount, ref, nextTick } from "vue";
import { getEchartsData } from "~/api";
let scsOption;
let myEcharts = echarts;
let legendData = [],
  xData = [],
  yData = [];

onMounted(() => {
  getData();
});

let getData = async () => {
  await nextTick();
  const { data } = await getEchartsData();
  data.charts3.yData.forEach((item) => {
    legendData.push(item.name);
    let y = [];
    let x = [];
    item.data.forEach((yitem) => {
      y.push(yitem.value);
      x.push(yitem.date);
    });
    yData.push(y);
    xData.push(x);
  });
  callData();
};

let callData = () => {
scsOption = {
  title: {
    text: "每日计划数",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  grid: {
    bottom: 30,
    left: 30,
    right: 30,
  },
  xAxis: [
    {
      type: "category",
      data: xData[0],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      show: false,
    },
    {
      type: "value",
    },
  ],
  
  // series: yData,
  series: [
    {
      type: "bar",
      name: "生产数",
      // tooltip: {
      //   valueFormatter: function (value) {
      //     return value + " ml";
      //   },
      // },
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
      data:yData[0],
    },
    {
      type: "line",
      name: "生产总时间",
      yAxisIndex: 1,
      //   tooltip: {
      //     valueFormatter: function (value) {
      //       return value + " °C";
      //     },
      //   },
      data: yData[1],
    },
  ],
};
setEcharts();
}

let setEcharts = () => {
  let chart = myEcharts.init(document.getElementById("scs", "purple-passion"));
  scsOption && chart.setOption(scsOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="scs"
    :option="scsOption"
    chartHeight="400px"
  ></BaseEcharts>
</template>
