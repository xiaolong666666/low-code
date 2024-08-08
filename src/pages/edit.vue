<template>
  <div>
    <Header />
    <div class="main">
      <Tools />
      <Preview />
      <Config />
    </div>
  </div>
</template>

<script setup>
import Header from "@c/edit/header.vue";
import Tools from "@c/edit/tools.vue";
import Preview from "@c/edit/preview.vue";
import Config from "@c/edit/config.vue";
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 56px);
}
</style>
