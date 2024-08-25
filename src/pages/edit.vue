<template>
  <div>
    <Header :onBackout="onBackout" :onRecover="onRecover" />
    <div class="main">
      <Tools />
      <Preview :pageId="pageId" />
      <Config />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Header from "@c/edit/header.vue";
import Tools from "@c/edit/tools.vue";
import Preview from "@c/edit/preview.vue";
import Config from "@c/edit/config.vue";
import store from "@/store.js";
import { findLatest, findPrev, findNext } from "@/db.js";

const route = useRoute();
const {
  params: { id: pageId },
} = route;

const updatePreview = (record) => {
  console.info("record", record);
  if (record) {
    store.components = record.components;
    store.currentComponentId = record.currentComponentId;
    store.counter = record.counter;
    store.cache = true;
  }
};

const onInit = async () => {
  const record = await findLatest(pageId);
  updatePreview(record);
};

const onBackout = async () => {
  const record = await findPrev(pageId);
  updatePreview(record);
};

const onRecover = async () => {
  const record = await findNext(pageId);
  updatePreview(record);
};

function handleKeyDown(event) {
  if (
    event.key === "z" &&
    (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)
  ) {
    onBackout();
    event.preventDefault();
  }
  if (
    event.key === "y" &&
    (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)
  ) {
    onRecover();
    event.preventDefault();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
  onInit();
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 56px);
}
</style>
