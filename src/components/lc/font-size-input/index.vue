<template>
  <div class="wrapper">
    <input type="number" v-model="valRef" @input="onInput" min="12" max="36" />
    <div class="suffix">px</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { fontSize } = defineProps(["fontSize"]);
const emit = defineEmits(["change"]);
const valRef = ref(fontSize ? `${parseInt(fontSize)}` : "14");

function onInput(e) {
  if (e.target.value < 12) {
    valRef.value = "12";
  }
  if (e.target.value > 36) {
    valRef.value = "36";
  }
  emit("change", `${valRef.value}px`);
}
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapper input {
  flex: 1;
  border: 1px solid black;
  border-radius: 4px;
}

.wrapper .suffix {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background-color: #cfcfcf;
  border-radius: 4px;
}
</style>
