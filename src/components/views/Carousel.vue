<template>
  <el-carousel height="150px">
    <template v-for="(url, idx) in info.settings.urls" :key="item">
      <el-carousel-item>
        <img :src="url" :alt="idx + 1" srcset="" />
      </el-carousel-item>
    </template>
  </el-carousel>
</template>

<script setup>
defineProps(["info"]);
</script>
