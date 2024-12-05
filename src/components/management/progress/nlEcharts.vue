<script setup>
import * as echarts from "echarts";
import { onMounted, onBeforeMount, ref, nextTick } from "vue";
import { getEchartsData } from "~/api";
let nlOption;
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
  data.charts1.yData.forEach((item) => {
    legendData.push(item.name);
    let y = [];
    let x = [];
    item.data.forEach((yitem) => {
      y.push(yitem.value);
      x.push(yitem.date);
    });
    yData.push({ name: item.name, data: y, type: "line" });
    xData.push(x);
  });
  callData();
};

let callData = () => {
  console.log(xData, "asdfasdfasdf", yData);
  nlOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      icon: "circle",
      left: 5,
      top: 5,
      textStyle: {
        color: "#fff",
      },
      // data: ["能率A", "能率B"],
      data: legendData,
    },
    grid: {
      left: "50",
      right: "30",
      bottom: "10",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisTick: {
        lineStyle: {
          color: "#fff",
        },
      },
      data: xData[0],
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisTick: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    series: yData,
  };

  setEcharts();
};

let setEcharts = () => {
  let chart = myEcharts.init(document.getElementById("nl", "purple-passion"));
  nlOption && chart.setOption(nlOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="nl"
    :option="nlOption"
    chartHeight="200px"
  ></BaseEcharts>
</template>

<style lang="scss">
.myEcharts {
  width: 100%;
}
</style>