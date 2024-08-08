<template>
  <div class="container">
    <div v-for="tool in toolsList" :key="tool.title" class="items">
      <img :src="tool.icon" class="w-6 h-6" />
      <div>{{ tool.title }}</div>
      <div class="text-slate-400">{{ tool.limit }}</div>
    </div>
  </div>
</template>

<script setup>
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
          color: "#333",
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
        content: "",
        style: {
          backgroundPosition: "",
        },
      },
    },
  },
  {
    icon: "/images/form.svg",
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
          color: "#333",
        },
      },
    },
  },
  {
    icon: "/images/form_text.svg",
    title: "图片",
    limit: 500,
    componentName: "Image",
    componentSchema: {
      name: "图片",
      componentName: "Image",
      configName: "ImageConfig",
      settings: {
        content: "",
        style: {
          backgroundPosition: "",
        },
      },
    },
  },
  {
    icon: "/images/form_mutiline_text.svg",
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
          color: "#333",
        },
      },
    },
  },
];
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
