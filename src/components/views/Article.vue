<template>
  <div :style="info.settings.style">
    {{ info.settings.content }}
  </div>
</template>

<script setup>
defineProps(["info"]);
</script>
