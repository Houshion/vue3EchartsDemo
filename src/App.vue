<template>
  <el-config-provider namespace="ep" :locale="zhCn">
    <!-- <BaseHeader /> -->
    <div class="flex main-container">
      <!-- <BaseSide /> -->
      <div w="full" py="0" h="full">
        <RouterView></RouterView>
        <!-- <Home></Home> -->

        <!-- <Logos my="4" /> -->
        <!-- <HelloWorld msg="Hello Vue 3 + Element Plus + Vite" /> -->
      </div>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import {RouterLink,RouterView} from 'vue-router'
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
</script>
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
  min-height: 100vh;
}

.main-container {
  min-height: 100vh;
}
.flex {
  display: flex;
}

::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
 
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
