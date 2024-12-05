<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="sortProp ? { prop: sortProp, order: 'descending' } : null"
    highlight-current-row
    @current-change="handleCurrentChange"
    :show-summary="showSummary"
    :height="maxHeight"
    stripe
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
  sortProp: {
    type: String,
    required: false,
  },
  showSummary: {
    type: Boolean,
    required: false,
  },
  maxHeight: {
    type: String,
  },
});

const handleCurrentChange = (row: any) => {
  emit("selectRow", row);
};
</script>
<style lang="scss" scoped>
:deep .ep-table__header tr th.ep-table__cell {
  background: #299789 !important;
  color: #fff;
}
// 斑马纹
:deep .ep-table__body tr.ep-table__row{
  background-color: rgb(128, 185, 168); /* 奇数行为灰色 */
}
:deep .ep-table__footer td.ep-table__cell {
  background-color: rgb(128, 185, 168); /* 尾部foot背景色 */
  font-weight: bolder;
}
:deep .ep-table__body tr.ep-table__row--striped,
:deep.ep-table--striped
  .ep-table__body
  tr.ep-table__row--striped
  td.ep-table__cell {
  background-color: #299789; /* 偶数行为灰色 */
}
</style>