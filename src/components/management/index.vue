<script setup>
import { ref } from "vue";
const btnsList = ref([
  { label: "生产进度管理", value: "progress", active: false },
  { label: "品质状况管理", value: "quality", active: true },
]);
const actValue = ref("quality")
const selectBtn = (item) => {
  console.log("asdf", item);
  btnsList.value.forEach((item) => {
    item.active = false;
  });
  actValue.value = item.value
  item.active = true;
};
</script>
<template>
  <div class="common-layout">
    <!-- <div class="left"> -->
    <el-container>
      <el-header>
        <div class="header">
          <div class="title">
            <div>YOKOWO</div>
            <div>G1-1</div>
          </div>
          <div class="btns">
            <el-button
              @click="selectBtn(item)"
              size="large"
              :class="`btn ${item.active ? 'acBtn' : null}`"
              v-for="(item, index) in btnsList"
              :key="index"
              >{{ item.label }}</el-button
            >
          </div>
        </div>
      </el-header>
      <el-container>
        <Progress v-if="actValue == 'progress'"></Progress>
        <Quality v-else></Quality>
      </el-container>
    </el-container>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  padding: 20px;
  background: rgb(13, 61, 73);
  color: #fff;
  // display: flex;
  min-height: 100vh;
}
.header {
  display: flex;
}
.title {
  font-family: fantasy;
  font-size: 24px;
  width: 200px;
}
.btn {
  width: 200px;
  height: 60px;
  background: #a8b3af;
  font-family: fantasy;
  color: #fff;
  &.acBtn {
    background: rgb(8, 169, 161);
  }
}
</style>