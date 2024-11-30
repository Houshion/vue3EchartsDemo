<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'fastSpeed', order: 'descending' }"
    highlight-current-row
    @current-change="handleCurrentChange"
  >
    <el-table-column
      :prop="item.prop"
      :label="item.label"
      v-for="(item, index) in tableHeader"
      :key="index"
      :sortable="item.sortable"
    />
  </el-table>
  <!-- {{ jzName }} -->
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";

// 定义一个向父组件传递的emit参数
const emit = defineEmits(["selectRow"]);
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
  tableHeader: {
    type: Array,
    required: true,
  },
});

const handleCurrentChange = (row: any) => {
  emit("selectRow", row);
};
</script>
<style lang="scss">
::v-deep .ep-table__body tr.current-row > td.ep-table__cell {
  background: #194bc1 !important;
}
</style>