<script setup>
const dailyOption = {
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
//   toolbox: {
//     feature: {
//       dataView: { show: true, readOnly: false },
//       restore: { show: true },
//       saveAsImage: { show: true },
//     },
//   },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
  series: [
    {
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
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
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
    {
      type: "line",
      yAxisIndex: 1,
    //   tooltip: {
    //     valueFormatter: function (value) {
    //       return value + " °C";
    //     },
    //   },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
};
</script>
<template>
  <BaseEcharts
    chartsId="daily"
    :option="dailyOption"
    chartHeight="300px"
  ></BaseEcharts>
</template>
