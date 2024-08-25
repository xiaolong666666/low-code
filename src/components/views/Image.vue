<template>
  <div>
    <img
      :src="info.settings.url"
      width="100"
      height="50"
      alt="image"
      :style="info.settings.style"
    />
  </div>
</template>

<script setup>
defineProps(["info"]);
</script>
