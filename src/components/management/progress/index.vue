<template>
  <el-aside width="200px" class="left">
    <div class="box" v-for="(item, index) in leftList" :key="index">
      <el-statistic
        :value="item.value"
        :value-style="item.numStyle ? rightValue : wrongValue"
        :precision="item.precision"
        :suffix="item.suffix"
      />
      <div class="label">{{ item.label }}</div>
    </div>
  </el-aside>
  <el-main>
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="chart">
            <div class="title">生产数 和 生产总时间</div>
            <div>
              <scsEcharts></scsEcharts>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="chart">
            <div class="title">生产性</div>
            <div>
              <scxEcharts></scxEcharts>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="chart">
            <div class="title">能率</div>
            <div>
              <nlEcharts></nlEcharts>
            </div>
          </div>
        </el-col>
      </el-row>
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
      <div class="month box">
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
      <div class="bc box">
        <div class="label">班次</div>
        <el-checkbox-group v-model="bcValue">
          <el-checkbox
            :label="item.label"
            :value="item.value"
            :key="index"
            v-for="(item, index) in bcOption"
          />
        </el-checkbox-group>
      </div>
      <div class="lx box">
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
      <div class="gcm box">
        <div class="label">工程名</div>
        <el-select v-model="month">
          <el-option
            v-for="item in monthOption"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="jzm box">
        <div class="label">机种名</div>
        <el-checkbox-group v-model="jzValue" height="100">
          <el-checkbox
            :label="item.label"
            :value="item.value"
            :key="index"
            v-for="(item, index) in jzOption"
          />
        </el-checkbox-group>
      </div>
    </div>
  </el-main>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { getInfoMsg } from "~/api";

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

const bcValue = ref();
const bcOption = [
  { label: "白班", value: 0 },
  { label: "夜班", value: 1 },
];
const jzValue = ref();
const jzOption = [
  { label: "08B40-E84-M000-01", value: 1 },
  { label: "08B40-E84-M000-02", value: 2 },
  { label: "08B40-E84-M000-03", value: 3 },
  { label: "08B40-E84-M000-04", value: 4 },
  { label: "08B40-E84-M000-05", value: 5 },
  { label: "08B40-E84-M000-06", value: 6 },
  { label: "08B40-E84-M000-07", value: 7 },
  { label: "08B40-E84-M000-08", value: 8 },
  { label: "08B40-E84-M000-09", value: 9 },
];

const leftList = ref([
  { prop: "scs", numStyle: 1, label: "生产数(PCS)", value: 0 },
  { prop: "scsj", numStyle: 1, label: "生产总时间(H)", value: 0 },
  {
    prop: "bzscx",
    numStyle: 1,
    label: "标准生产性(PCS/H)",
    value: 0,
    precision: 2,
  },
  {
    prop: "sjscx",
    numStyle: 1,
    label: "实际生产性(PCS/H)",
    value: 0,
    precision: 2,
  },
  { prop: "nla", numStyle: 1, label: "能率A", value: 0 },
  { prop: "nlb", numStyle: 1, label: "能率B", value: 0 },
]);
const rightValue = { fontSize: "30px", color: "#fff", fontWeight: "600" };
const wrongValue = { fontSize: "30px", color: "red", fontWeight: "600" };

/****** 接口 */
onMounted(async () => {
  const { data } = await getInfoMsg();
  leftList.value.forEach((item) => {
    if (item.prop == "nla" || item.prop == "nlb") {
      item.value = data[item.prop].toFixed(2) + "%";
    } else item.value = data[item.prop];
  });
  console.log("接口数据", leftList.value);
});
</script>
  <style lang="scss" scoped>
.right {
  width: 200px;
  text-align: left;
  right: 30px;
  top: 20px;
  .label {
    margin-bottom: 5px;
  }
}
.box {
  background: rgb(8, 169, 161);
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 20px 5px #333;
}
.left {
  padding: 20px;
  .box {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-content: space-around;
    justify-content: center;
    height: 80px;
    .label {
      width: 100%;
    }
  }
}
:deep .ep-checkbox {
  color: #fff;
}
:deep .ep-select__wrapper {
  background: rgb(8, 169, 161);
  .ep-select__placeholder {
    color: #fff;
  }
}
:deep .ep-select__suffix {
  color: #fff;
}
:deep .ep-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  .ep-checkbox {
    width: 100%;
    margin-right: 0;
  }
}
.jzm {
  :deep .ep-checkbox-group {
    max-height: 200px;
    overflow-y: scroll;
  }
}
.pm {
  :deep .ep-checkbox-group {
    max-height: 110px;
    overflow-y: scroll;
  }
}

.ep-main {
  display: flex;
  justify-content: space-between;
}
.main {
  width: calc(100% - 260px);
  .chart {
    padding: 0;
    margin-bottom: 20px;
    background: rgb(46, 110, 110);
  }
  .title {
    text-align: left;
    padding: 5px;
    font-size: 14px;
    background: rgb(8, 169, 161);
  }
}
</style>