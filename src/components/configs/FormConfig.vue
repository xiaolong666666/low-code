<template>
  <div>
    <h3>{{ info.name }}配置</h3>
    <div>{{ info }}</div>
  </div>
</template>

<script setup>
defineProps(["info"]);
</script>
