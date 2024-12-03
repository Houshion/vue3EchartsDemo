<template>
    <div>
      <BaseTable
        sortProp="total"
        :tableData="tableData"
        :tableHeader="tableHeader"
        maxHeight="300px"
      ></BaseTable>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, nextTick } from "vue";
  import { getLBDataList } from "~/api/index";
  const tableHeader = [
    { label: "拉别", prop: "lb" },
    { label: "机种名", prop: "name" },
    { label: "总数", prop: "total", sortable: true },
  ];
  // 挂载完成生命周期
  onMounted(() => {
    getData();
  });
  // 表格数据
  let tableData = ref();
  // 获取表格数据
  const getData = async () => {
    await nextTick();
    const { data } = await getLBDataList();
    tableData.value = await data.list;
  };
  </script>