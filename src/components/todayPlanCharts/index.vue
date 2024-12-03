<script setup lang="ts">
import JzChart from './jzChart.vue';
</script>


<template>
    <div class="plan">
      <div class="title">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="box">
              <div class="label">YOKOWO</div>
              <div class="value">01-1</div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="main box">
              <div class="value">今日计划</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="charts">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="box">
              <lbChart></lbChart>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="box">
              <lTable></lTable>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="charts">
        <el-row :gutter="20">
          <el-col :span="14">
            <div class="box">
              <JzChart></JzChart>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="box">
              <jzTable></jzTable>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </template>
  <style lang="scss" scoped>
  .plan {
    padding: 20px;
  }
  .title {
    font-weight: bold;
    .label {
      text-align: left;
    }
    .main {
      font-size: 18px;
      line-height: 40px;
    }
    .box {
      height: 40px;
    }
  }
  .box {
    background: #d8ede2;
    padding: 10px;
    border-radius: 10px;
  }
  .charts {
      margin-top: 5px;
  }
  </style>