<template>
  <div>
    <img :src="info.settings.src" width="100" height="50" alt="image" />
  </div>
</template>

<script setup>
defineProps(["info"]);
</script>
