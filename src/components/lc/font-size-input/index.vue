<template>
  <div class="wrapper">
    <el-input-number
      v-model="valRef"
      :min="12"
      :max="36"
      controls-position="right"
      @change="onChange"
      class="input-number"
    />
    <div class="el-input-group__append">px</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { fontSize } = defineProps(["fontSize"]);
const emit = defineEmits(["change"]);
const valRef = ref(fontSize ? `${parseInt(fontSize)}` : "14");

function onChange(v) {
  if (v < 12) {
    valRef.value = "12";
  }
  if (v > 36) {
    valRef.value = "36";
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
