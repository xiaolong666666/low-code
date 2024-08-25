<template>
  <el-color-picker v-model="valRef" @change="onChange" />
</template>

<script setup>
import { ref } from "vue";

const { color } = defineProps(["color"]);
const emit = defineEmits(["change"]);
const valRef = ref(color);

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
