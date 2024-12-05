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
            <div class="title">出货数和不良数</div>
            <div>
              <chsEcharts></chsEcharts>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="chart">
            <div class="title">不良数和不良率</div>
            <div>
              <blsEcharts></blsEcharts>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="chart">
            <div class="title">不良总数(按机种名)</div>
            <div>
              <bljzPie></bljzPie>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="chart">
            <div class="title">不良数(不良内容)</div>
            <div>
              <blnrPie></blnrPie>
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
      <div class="pm box">
        <div class="label">品名</div>
        <el-checkbox-group v-model="pmValue">
          <el-checkbox
            :label="item.label"
            :value="item.value"
            :key="index"
            v-for="(item, index) in pmOption"
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
      <div class="bl box">
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

const pmValue = ref();
const pmOption = [
  { label: "(空白)", value: null },
  { label: "ETC", value: 0 },
  { label: "GPS", value: 1 },
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
  { prop:'chs',numStyle: 1, label: "出货数(PCS)", value: 0 },
  { prop:'bls',numStyle: 0, label: "不良数(PCS)", value: 0 },
  { prop:'blv',numStyle: 0, label: "不良率(PPM)", value: 0, precision: 2 },
  { prop:'bljz',numStyle: 1, label: "不良机种", value: 0 },
  { prop:'bllx',numStyle: 1, label: "不良类型", value: 0 },
]);
const rightValue = { fontSize: "30px", color: "#fff", fontWeight: "600" };
const wrongValue = { fontSize: "30px", color: "red", fontWeight: "600" };

/****** 接口 */
onMounted(async () => {
  const { data } = await getInfoMsg();
  leftList.value.forEach((item) => {
    if (item.prop == "blv") {
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