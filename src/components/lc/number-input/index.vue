<template>
  <div class="wrapper">
    <el-input-number
      v-model="valRef"
      :min="min"
      :max="max"
      controls-position="right"
      @change="onChange"
      class="input-number"
    />
    <div class="el-input-group__append">px</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { v, defaultValue, min, max } = defineProps([
  "v",
  "defaultValue",
  "min",
  "max",
]);
const emit = defineEmits(["change"]);
const valRef = ref(v ? `${parseInt(v)}` : defaultvalue);

function onChange(v) {
  if (v < Number(min)) {
    valRef.value = min;
  }
  if (v > Number(max)) {
    valRef.value = max;
  }
  emit("change", `${valRef.value}px`);
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.input-number {
  width: 100%;
}

.el-input-group__append {
  padding: 0 8px;
}
</style>
