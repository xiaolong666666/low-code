<template>
  <div class="container">
    <template
      v-for="componentItem in store.components"
      :key="componentItem._id"
    >
      <div class="wrapper">
        <!-- 选择框 -->
        <div
          v-show="store.currentComponentId === componentItem._id"
          class="select_box"
        />
        <!-- 匹配对应组件 -->
        <component
          :is="componentItem.componentName"
          :info="componentItem"
          @click="onSelectComponent(componentItem._id)"
        />
      </div>
    </template>
  </div>
</template>

<script>
import TitleText from "@c/views/TitleText.vue";
import Image from "@c/views/Image.vue";
import Space from "@c/views/Space.vue";
import Carousel from "@c/views/Carousel.vue";
import Form from "@c/views/Form.vue";
import Figma from "@c/views/Figma.vue";
import Article from "@c/views/Article.vue";
export default {
  // 注册组件
  components: {
    TitleText,
    Image,
    Space,
    Carousel,
    Form,
    Figma,
    Article,
  },
};
</script>

<script setup>
import { onMounted } from "vue";
import store from "@/store.js";
import { INIT, SYNC_MESSAGE, SELECT_COMPONENT } from "@const";

// iframe 的父容器
let parent = null;

onMounted(() => {
  window.addEventListener("message", function (event) {
    if (event.data) {
      const { message, data } = event.data;
      switch (message) {
        case INIT:
          onInit(event);
          break;
        case SYNC_MESSAGE:
          onSyncMessage(data);
          break;
        default:
          break;
      }
    }
  });
});

// 获取 iframe 父容器
function onInit(event) {
  parent = event.source;
}

function onSyncMessage(data) {
  // 接收到 iframe 父容器传来的组件列表数据，并更新 store
  Object.keys(data).forEach((key) => {
    store[key] = data[key];
  });
}

function onSelectComponent(_id) {
  // 点击组件时，将 currentComponentId 设为点击的组件 id
  store.currentComponentId = _id;
  // 向 iframe 父容器发送消息，告诉 iframe 点击了某一组件，更新父容器中 store
  parent.postMessage({
    message: SELECT_COMPONENT,
    data: _id,
  });
}
</script>

<style scoped>
.container {
}
.wrapper {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: content-box;
}
.select_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>
