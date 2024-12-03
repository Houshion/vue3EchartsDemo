<script setup>
const monthPlanOption = {
  title: {
    text: "本月计划总数",
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
      data: ["Mon"],
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
      barWidth: 60,
      name: "Direct",
      type: "bar",
      data: [10],
    },
  ],
};
</script>
<template>
  <BaseEcharts
    chartsId="monthPlan"
    :option="monthPlanOption"
    chartHeight="300px"
  ></BaseEcharts>
</template>