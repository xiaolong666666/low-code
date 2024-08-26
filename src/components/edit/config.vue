<template>
  <div class="container">
    <ConfigLayout v-if="currentComponent">
      <template #header>{{ currentComponent.name }}配置</template>
      <!-- 匹配对应组件 -->
      <!-- :key 确保同类组件不被缓存 -->
      <component
        :key="currentComponent._id"
        :is="currentComponent.configName"
        :info="currentComponent.settings"
        @update="update"
      />
      <template #footer></template>
    </ConfigLayout>
  </div>
</template>

<script>
import ConfigLayout from "@c/configs/ConfigLayout.vue";
import TitleTextConfig from "@c/configs/TitleTextConfig.vue";
import ImageConfig from "@c/configs/ImageConfig.vue";
import SpaceConfig from "@c/configs/SpaceConfig.vue";
import CarouselConfig from "@c/configs/CarouselConfig.vue";
import FormConfig from "@c/configs/FormConfig.vue";
import FigmaConfig from "@c/configs/FigmaConfig.vue";
import ArticleConfig from "@c/configs/ArticleConfig.vue";
export default {
  // 注册组件
  components: {
    ConfigLayout,
    TitleTextConfig,
    ImageConfig,
    SpaceConfig,
    CarouselConfig,
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
  currentComponent.value = target;
}

function update(k, v) {
  function handle(data) {
    if (typeof data !== "object") return;
    Object.keys(data).forEach((key) => {
      if (key === k) {
        data[key] = v;
      } else {
        handle(data[key]);
      }
    });
  }
  handle(currentComponent.value.settings);
}
</script>

<style scoped>
.container {
  width: 360px;
}
</style>
