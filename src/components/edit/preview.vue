<template>
  <div class="container">
    <el-alert
      v-show="false"
      title="提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？"
      type="warning"
      show-icon
      class="border border-orange-300"
    />
    <div class="main">
      <iframe
        src="/edit/preview/123"
        frameborder="0"
        class="iframe iframe-tailwind"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ElAlert } from "element-plus";
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.main {
  flex: 1;
  @apply p-4 flex flex-col;
}

.iframe-tailwind {
  @apply shadow bg-white;
}

.iframe {
  margin: 0 auto;
  flex: 1;
}
</style>
