<template>
  <div class="wrapper">
    <template v-for="item in fontWeightList" :key="item">
      <button
        @click="handleClick(item.value)"
        :class="['button', fontWeight === item.value ? 'active' : '']"
      >
        {{ item.label }}
      </button>
    </template>
  </div>
</template>

<script setup>
const { fontWeight } = defineProps(["fontWeight"]);
const emit = defineEmits(["change"]);

const fontWeightList = [
  { value: "lighter", label: "更细" },
  { value: "normal", label: "正常" },
  { value: "bold", label: "更粗" },
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
