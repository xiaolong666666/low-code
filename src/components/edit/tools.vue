<template>
  <div class="container">
    <div
      v-for="tool in toolsList"
      :key="tool.title"
      @click="onAddComponent(tool.componentSchema)"
      class="items"
    >
      <img :src="tool.icon" class="w-6 h-6" />
      <div>{{ tool.title }}</div>
      <div class="text-slate-400">
        {{ store.counter[tool.componentName] ?? 0 }} / {{ tool.limit }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { cloneDeep } from "lodash";
import store from "@/store.js";
import { getUuid } from "@utils/uuid.js";

const toolsList = [
  {
    icon: "/images/title_text.svg",
    title: "标题文本",
    limit: 50,
    componentName: "TitleText",
    componentSchema: {
      name: "标题文本",
      componentName: "TitleText",
      configName: "TitleTextConfig",
      settings: {
        content: "这是一个标题文本",
        style: {
          textAlign: "left",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333333",
        },
      },
    },
  },
  {
    icon: "/images/image.svg",
    title: "图片",
    limit: 500,
    componentName: "Image",
    componentSchema: {
      name: "图片",
      componentName: "Image",
      configName: "ImageConfig",
      settings: {
        url: "https://q7.itc.cn/q_70/images03/20240129/b2bee60c8dbc48a0872c179aef2def2a.jpeg",
        style: {
          borderRadius: "unset",
        },
      },
    },
  },
  {
    icon: "/images/space.svg",
    title: "留白",
    limit: 500,
    componentName: "Space",
    componentSchema: {
      name: "留白",
      componentName: "Space",
      configName: "SpaceConfig",
      settings: {
        style: {
          height: "24px",
        },
      },
    },
  },
  {
    icon: "/images/carousel.svg",
    title: "轮播",
    limit: 5,
    componentName: "Carousel",
    componentSchema: {
      name: "轮播",
      componentName: "Carousel",
      configName: "CarouselConfig",
      settings: {
        urls: [
          "https://q7.itc.cn/q_70/images03/20240129/b2bee60c8dbc48a0872c179aef2def2a.jpeg",
          // "https://pic.rmb.bdstatic.com/bjh/down/4b66a99c1059865ee2c2dee18d956876.jpeg",
          // "https://img.likebizhi.com/1821652950/123pan/123panlikebizhi/240104061004.jpg",
          // "https://gd-hbimg.huaban.com/73c11dcb7915ec24919c29258f58a5cd9c394d293dc6a-3nnPEL_fw1200",
          "https://pic.rmb.bdstatic.com/f51c39178112a3a90e921d8359eff916.png",
        ],
      },
    },
  },
  {
    icon: "/images/form.svg",
    title: "表单",
    limit: 50,
    componentName: "Form",
    componentSchema: {
      name: "表单",
      componentName: "Form",
      configName: "FormConfig",
      settings: {
        content: "这是一个表单",
        style: {
          textAlign: "left",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333",
        },
      },
    },
  },
  {
    icon: "/images/form_text.svg",
    title: "Figma",
    limit: 500,
    componentName: "Figma",
    componentSchema: {
      name: "Figma",
      componentName: "Figma",
      configName: "FigmaConfig",
      settings: {
        url: "https://gd-hbimg.huaban.com/73c11dcb7915ec24919c29258f58a5cd9c394d293dc6a-3nnPEL_fw1200",
        style: {
          backgroundPosition: "",
        },
      },
    },
  },
  {
    icon: "/images/form_mutiline_text.svg",
    title: "文章",
    limit: 50,
    componentName: "Article",
    componentSchema: {
      name: "文章",
      componentName: "Article",
      configName: "ArticleConfig",
      settings: {
        content: "这是一篇文章",
        style: {
          textAlign: "left",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333",
        },
      },
    },
  },
];

const onAddComponent = (schema) => {
  // 防止修改数据时对原数据造成影响
  const currentSchema = cloneDeep(schema);
  const uuid = getUuid();
  currentSchema._id = uuid;
  store.components.push(currentSchema);
  // 记录当前编辑的组件的 ID
  store.currentComponentId = uuid;
  // 组件个数处理
  if (!store.counter[currentSchema.componentName]) {
    store.counter[currentSchema.componentName] = 0;
  }
  store.counter[currentSchema.componentName]++;
};
</script>

<style scoped>
.container {
  @apply w-40 h-max flex gap-2 flex-wrap;
}
.items {
  width: calc(50% - 4px);
  @apply h-20 flex flex-col justify-center items-center gap-0.5 rounded text-xs hover:bg-slate-100 cursor-pointer;
}
</style>
