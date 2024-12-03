<script setup>
const monthMTDOption = {
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
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        position: 'top',
        backgroundColor: "#ffffff",
        padding: 5,
        borderRadius:5
      },
      itemStyle: {
        color: "#299789",
      },
      name: "Direct",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
};
</script>
<template>
  <BaseEcharts
    chartsId="monthMTD"
    :option="monthMTDOption"
    chartHeight="300px"
  ></BaseEcharts>
</template>
