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
      <!-- 预览主体 -->
      <iframe
        ref="iframeRef"
        src="/edit/preview/123"
        frameborder="0"
        class="iframe iframe-tailwind"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRaw, onMounted } from "vue";
import { ElAlert } from "element-plus";
import store from "@/store.js";
import { INIT, CREATE_COMPONENT, SELECT_COMPONENT } from "@const";

const iframeRef = ref(null);

// 父容器监听 store.components, 传递数据给 iframe
watch(store.components, (newValue) => {
  iframeRef.value.contentWindow.postMessage({
    message: CREATE_COMPONENT,
    data: toRaw(newValue),
  });
});

onMounted(() => {
  // iframe 实例存在
  if (iframeRef.value) {
    // 600ms 后重置 iframe 内容（iframe需要加载时间 => 才能监听到事件）
    setTimeout(() => {
      iframeRef.value.contentWindow.postMessage({
        message: INIT,
        data: null,
      });
    }, 600);
  }
  // 接收 iframe 传递来的消息
  window.addEventListener("message", (event) => {
    if (event.data) {
      const { message, data } = event.data;
      switch (message) {
        case SELECT_COMPONENT:
          onSelectComponent(data);
      }
    }
  });
});

// 获取当前组件 ID
function onSelectComponent(_id) {
  store.currentComponentId = _id;
}
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
