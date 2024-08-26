<template>
  <div>
    <div class="item">
      <div class="item-left">图片列表：</div>
      <div class="item-right"></div>
    </div>
  </div>
</template>

<script setup>
defineProps(["info"]);
const emit = defineEmits(["update"]);

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
@import url(./common-config.css);
</style>
