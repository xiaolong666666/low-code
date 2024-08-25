<template>
  <el-input v-model="props.value" @input="onInput" />
</template>

<script setup>
const props = defineProps(["value"]);

const emit = defineEmits(["input"]);

function onInput(v) {
  emit("input", v);
}
</script>
