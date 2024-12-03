vue
<template>
  <div class="common-layout">
    <div class="left">
      <el-container>
        <el-header>
          <div class="header">
            <div class="title">
              <div>YOKOWO</div>
              <div>G1-1</div>
            </div>
            <div class="btns">
              <el-button size="large" class="btn">生产进度管理</el-button>
              <el-button size="large" class="btn acBtn">品质状况管理</el-button>
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
    <div class="right">
      <div class="year box">
        <div class="label">年</div>
        <el-select v-model="year">
          <el-option
            v-for="item in yearOption"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="year box">
        <div class="label">月份</div>
        <el-select v-model="month">
          <el-option
            v-for="item in monthOption"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="year box">
        <div class="label">品名</div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox
            :label="item.label"
            :value="item.value"
            :key="index"
            v-for="(item, index) in pmOption"
          />
        </el-checkbox-group>
      </div>
      <div class="year box">
        <div class="label">拉线</div>
        <el-select v-model="month">
          <el-option
            v-for="item in monthOption"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="year box">
        <div class="label">不良</div>
        <el-select v-model="month">
          <el-option
            v-for="item in monthOption"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let yearOption = [],
  monthOption = [];
const now = new Date();
for (let i = 0; i < 100; i++) {
  yearOption.push(now.getFullYear() - i);
}
for (let i = 1; i <= 12; i++) {
  monthOption.push(i);
}
const year = ref(now.getFullYear());
const month = ref(now.getMonth() + 1);

const pmOption = [
  { label: "(空白)", value: null },
  { label: "ETC", value: 0 },
  { label: "GPS", value: 1 },
];
</script>

<style lang="scss" scoped>
.common-layout {
  padding: 20px;
  background: rgb(13, 61, 73);
  color: #fff;
  display: flex;
}
.header {
  display: flex;
}
.left {
  width: calc(100% - 220px);
  margin-right: 20px;
}
.right {
  width: 200px;
  text-align: left;
  .label {
    margin-bottom: 5px;
  }
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
    background: #0a736c;
  }
}
.box {
  background: #0a736c;
  padding: 10px;
  border-radius: 3px;
}
</style>