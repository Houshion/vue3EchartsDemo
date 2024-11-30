<template>
  <div class="echarts-box">
    <div id="myEcharts" class="myEcharts"></div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

let myEcharts = echarts;

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myEcharts.dispose();
});

let yArray = [];
for (let i = 0; i < 200; i++) {
  yArray.push(i);
}

let initChart = () => {
  let chart = myEcharts.init(
    document.getElementById("myEcharts", "purple-passion")
  );
  let option = {
    title: {
      text: "生产数推移图",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      icon: "circle",
      left: 0,
      top: 30,
      data: ["标准时间", "排出", "瓶颈1", "瓶颈2", "投入"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "45px",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      boundaryGap: false,
      data: yArray,
      show: true,
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          opcity: 0.5,
        },
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10, //此处是%，调节此处展示X轴的量
      },
      {
        start: 0,
        end: 10,
      },
    ],
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      show: true,
      splitLine: {
        lineStyle: {
          type: "dashed",
          opcity: 0.5,
        },
      },
    },
    series: [
      {
        name: "标准时间",
        type: "line",
        data: [0, 10, 20, 30, 40, 50, 60],
      },
      {
        name: "排出",
        type: "line",
        data: ["", 0, 10, 20, 30, 40, 50],
      },
      {
        name: "瓶颈1",
        type: "line",
        data: ["", "", 0, 10, 20, 30, 40],
      },
      {
        name: "瓶颈2",
        type: "line",
        data: ["", "", "", 0, 10, 20, 30],
      },
      {
        name: "投入",
        type: "line",
        data: ["", "", "", "", 0, 10, 20],
      },
    ],
  };

  option && chart.setOption(option);
};
</script>
<style lang="scss">
.myEcharts {
  width: 100%;
  height: 360px;
}
</style>