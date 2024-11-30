<template>
  <div class="msgInfo flex">
    <div class="name flex">{{ msgLabel }}</div>
    <div class="msg flex">
      <div class="item flex" v-for="(item, index) in msgData" :key="index">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["msgData",'msgLabel']);
</script>

<style lang="scss" scoped>
.msgInfo {
  border: 1px solid #ffffff;
  padding: 5px;
  margin-bottom: 0.5rem;
  .name {
    width: 20px;
    align-items: center;
    font-size: 18px;
  }
  .msg {
    flex-wrap: wrap;
    .item {
      width: 100%;
      align-items: center;
      margin: 2.5px 0;
      .value {
        background: rgba(0, 9, 139, 0.5);
        text-align: center;
        width: 16 * 6px;
        height: 20px;
        padding: 3px 0;
      }
      .label {
        padding: 0 5px;
        width: 16 * 4px;
      }
    }
  }
}
</style>