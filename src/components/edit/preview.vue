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
        :src="`/edit/preview/${pageId}`"
        frameborder="0"
        class="iframe iframe-tailwind"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRaw, onMounted } from "vue";
import store from "@/store.js";
import { addPage } from "@/db.js";
import { INIT, SYNC_MESSAGE, SELECT_COMPONENT } from "@const";

const { pageId } = defineProps(["pageId"]);

const iframeRef = ref(null);

function getLatestStore() {
  const components = toRaw(store.components);
  const currentComponentId = toRaw(store.currentComponentId);
  const counter = toRaw(store.counter);

  return { components, currentComponentId, counter };
}

// 父容器监听 store.components, 传递数据给 iframe
watch(
  () => store.components,
  () => {
    const newStore = getLatestStore();

    iframeRef.value.contentWindow.postMessage({
      message: SYNC_MESSAGE,
      data: newStore,
    });
    addPage(pageId, newStore);
  },
  { deep: true }
);

// 读取缓存数据后初始化 iframe 数据
watch(
  () => store.cache,
  (newValue) => {
    if (newValue) {
      const newStore = getLatestStore();

      setTimeout(() => {
        iframeRef.value.contentWindow.postMessage({
          message: SYNC_MESSAGE,
          data: newStore,
        });
      }, 600);
    }
  }
);

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
