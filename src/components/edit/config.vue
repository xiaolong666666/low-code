<template>
  <div class="container">
    <!-- 匹配对应组件 -->
    <component
      v-if="currentComponent"
      :is="currentComponent.configName"
      :info="currentComponent"
    />
  </div>
</template>

<script>
import TitleTextConfig from "@c/configs/TitleTextConfig.vue";
import ImageConfig from "@c/configs/ImageConfig.vue";
import FormConfig from "@c/configs/FormConfig.vue";
import FigmaConfig from "@c/configs/FigmaConfig.vue";
import ArticleConfig from "@c/configs/ArticleConfig.vue";
export default {
  // 注册组件
  components: {
    TitleTextConfig,
    ImageConfig,
    FormConfig,
    FigmaConfig,
    ArticleConfig,
  },
};
</script>

<script setup>
import { ref, watch } from "vue";
import store from "@/store.js";
// 当前组件
const currentComponent = ref(null);

// 监听 currentComponentId 变化，并重新获取并匹配对应的组件
watch(
  () => store.currentComponentId,
  (newValue) => {
    onCurrentComponentChange(newValue);
  }
);

// 根据 ID 获取匹配的组件
function onCurrentComponentChange(_id) {
  const target = store.components.find((c) => c._id === _id);
  currentComponent.value = Object.assign({}, target);
}
</script>

<style scoped>
.container {
  width: 360px;
}
</style>
