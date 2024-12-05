<script setup>
import * as echarts from "echarts";
import { onMounted, onBeforeMount, ref, nextTick } from "vue";
import { getEchartsData } from "~/api";
let scxOption;
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
  data.charts2.yData.forEach((item) => {
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
  scxOption = {
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
      data: legendData,
    },
    grid: {
      left: "80",
      right: "30",
      bottom: "30",
      containlabel: true,
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
  let chart = myEcharts.init(document.getElementById("scx", "purple-passion"));
  scxOption && chart.setOption(scxOption);
};
</script>
<template>
  <BaseEcharts
    chartsId="scx"
    :option="scxOption"
    chartHeight="200px"
  ></BaseEcharts>
</template>

<style lang="scss">
.myEcharts {
  width: 100%;
}
</style>