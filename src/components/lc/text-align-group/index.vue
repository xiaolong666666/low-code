<template>
  <div class="wrapper">
    <template v-for="item in textAlignList" :key="item">
      <button
        @click="handleClick(item.value)"
        :class="['button', textAlign === item.value ? 'active' : '']"
      >
        {{ item.label }}
      </button>
    </template>
  </div>
</template>

<script setup>
const { textAlign } = defineProps(["textAlign"]);
const emit = defineEmits(["change"]);

const textAlignList = [
  { value: "left", label: "居左" },
  { value: "center", label: "居中" },
  { value: "right", label: "居右" },
];

function handleClick(v) {
  emit("change", v);
}
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 8px;
}
.button {
  padding: 0 4px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  cursor: pointer;
}
.active {
  background-color: #409eff;
  color: #fff;
  border: 1px solid transparent;
}
</style>
