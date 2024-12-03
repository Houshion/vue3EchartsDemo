<script lang="ts" setup>
import { ref, nextTick } from "vue";

import { onMounted, onBeforeMount, reactive } from "vue";
import { login, getUserInfo } from "~/api/main";
import { getDataList } from "~/api/index";

/*********** 声明变量 ***********/
// 表格数据
let tableData = ref();
// 表头数据
const tableHeader = [
  { label: "工位", prop: "gw" },
  { label: "生产数", prop: "num" },
  { label: "进度状况", prop: "gw" },
  { label: "首本时间", prop: "date" },
  { label: "当本时间", prop: "date" },
  { label: "世界节拍(秒)", prop: "name" },
  { label: "实际速度", prop: "fastSpeed" },
  { label: "最快节拍(秒)", prop: "fastSpeed" },
  { label: "最快速度", prop: "fastSpeed", sortable: true },
];
// 机种名
const jizhongming = ref(1);
// 机种名option
const selectOption = [
  { value: 1, label: "YOZ-52297HD01" },
  { value: 2, label: "YOZ-52297HD02" },
  { value: 3, label: "YOZ-52297HD03" },
  { value: 4, label: "YOZ-52297HD04" },
  { value: 5, label: "YOZ-52297HD05" },
  { value: 6, label: "YOZ-52297HD06" },
];
// 更新时间
const timeValue = ref("");
// 更新时间快捷选项
const shortcuts = [
  {
    text: "昨天",
    value: () => {
      const end = new Date();
      let start = new Date();
      start.setDate(start.getDate() - 1);
      start = (new Date(start.setHours(0, 0, 0, 0)));
      return [start, end];
    },
  },
  {
    text: "今天",
    value: () => {
      const end = new Date();
      let start
      start = (new Date(new Date().setHours(0, 0, 0, 0)));
      return [start, end];
    },
  },
  {
    text: "最近7天",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 7);
      return [start, end];
    },
  },
  {
    text: "最近一个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setMonth(start.getMonth() - 1);
      return [start, end];
    },
  },
  {
    text: "最近3个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setMonth(start.getMonth() - 3);
      return [start, end];
    },
  },
];
// 状况信息1
const msgInfoData1 = ref({
  labelName: "标准状况",
  data: [
    {
      label: "标准数",
      value: "52本",
    },
    {
      label: "标准节拍",
      value: "28.8秒",
    },
    {
      label: "标准速度",
      value: "125本/H",
    },
  ],
});
// 状况信息2
const msgInfoData2 = ref({
  labelName: "稼动状况",
  data: [
    {
      label: "瓶颈工程",
      value: "瓶颈1",
    },
    {
      label: "开始时间",
      value: "00:00:00",
    },
    {
      label: "结束时间",
      value: "",
    },
    {
      label: "稼动时间",
      value: "00:19:57",
    },
    {
      label: "休息时间",
      value: "00:00:00",
    },
    {
      label: "停线时间",
      value: "00:04:35",
    },
    {
      label: "稼动率",
      value: "81.32%",
    },
  ],
});
/*********** 声明变量 ***********/

/*********** 生命周期 ***********/
// 挂载前生命周期
onBeforeMount(() => {
  // 组件中 使用
  const loginInit = async () => {
    // params  入参  {id：'1',name: '测试'}
    const user = await login({
      username: "admin",
      password: "123456789",
    });
    console.log("user", user);

    // 获取用户信息
    const users = await getUserInfo();
    console.log("users,users", users);
  };
  // loginInit();
});
// 挂载完成生命周期
onMounted(() => {
  getData();
});
/*********** 生命周期 ***********/

/*********** 方法函数 ***********/
// 机种名值改变
const onChangeJZ = (value: any) => {
  getData();
};
// 更新时间改变
const onChangeTime = (value: any) => {
  getData();
};
// 获取表格数据
const getData = async () => {
  await nextTick();
  const { data } = await getDataList({
    jzName: jizhongming.value,
    time: timeValue.value,
  });
  tableData.value = await data.list;
};
// 选中表中其中一行
const selectRow = (row:any)=>{
  console.log(row)
}
/*********** 方法函数 ***********/
</script>

<!-- 页面 -->
<template>
  <div class="bg" h="full">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="6" class="box">
          <div class="name">G-6L</div>
        </el-col>
        <el-col :span="6">
          <div class="labelBox">
            <div class="title">机种名</div>
            <div class="name">
              <el-select
                v-model="jizhongming"
                style="width: 240px"
                @change="onChangeJZ"
              >
                <el-option
                  v-for="item in selectOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="labelBox">
            <div class="title">计划数(本)</div>
            <div class="name">1496</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="labelBox">
            <div class="title">更新时间</div>
            <div class="name">
              <el-date-picker
                v-model="timeValue"
                @change="onChangeTime"
                type="datetimerange"
                format="YYYY/MM/DD HH:mm:ss"
                value-format="YYYY/MM/DD HH:mm:ss"
                :shortcuts="shortcuts"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Table
      class="tableCss"
      :tableData="tableData"
      :tableHeader="tableHeader"
      @selectRow="selectRow"
    ></Table>
    <div class="main flex">
      <div class="left">
        <MsgInfo
          :msgLabel="msgInfoData1.labelName"
          :msgData="msgInfoData1.data"
        ></MsgInfo>
        <MsgInfo
          :msgLabel="msgInfoData2.labelName"
          :msgData="msgInfoData2.data"
        ></MsgInfo>
      </div> 
      <div class="right">
        <Echarts></Echarts>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: linear-gradient(to top left, #00098b, #00e7ff) 100% 100%;
  color: #ffffff;
  padding: 1rem;
  min-height: 100vh;
}
.labelBox {
  .name {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  .name {
    background: rgba(0, 9, 139, 0.2);
    padding: 0.5rem 2rem;
  }
}
.tableCss {
  margin: 1rem 0;
}
:deep(.ep-table),
:deep(.ep-table tr) {
  background-color: rgba(255, 255, 255, 0);
  color: #fff;
  .ep-table__row:nth-child(2n) {
    color: #ffee07;
  }
}
:deep(.ep-table th.ep-table__cell) {
  background: rgba(0, 9, 139, 0.2);
  color: #123456;
}
.main {
  .left {
    width: 200px;
  }
  .right {
    width: calc(100% - 200px - 1rem);
    margin-left: 1rem;
  }
}
</style>