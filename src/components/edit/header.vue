<template>
  <div class="header">
    <router-link to="/"><span class="text-xl">🔙</span></router-link>
    <div class="flex gap-3">
      <el-button type="default">预览</el-button>
      <el-button type="default">保存</el-button>
      <el-button type="primary" @click="onPublish">发布</el-button>
    </div>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus";

const onPublish = () => {
  // fetch("http://localhost:6969/api/page/create", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     title: "My Page",
  //     components: store.components,
  //   }),
  // })
};
</script>

<style scoped>
.header {
  @apply flex items-center justify-between h-14 px-2 border-b border-b-slate-200 box-border;
}
</style>
