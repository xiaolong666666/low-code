<template>
  <RadioButtonGroup
    :dataSource="textAlignList"
    :v="textAlign"
    :change="onChange"
  />
</template>

<script setup>
import RadioButtonGroup from "@lc/common/radio-button-group.vue";

const { textAlign } = defineProps(["textAlign"]);
const emit = defineEmits(["change"]);

const textAlignList = [
  { value: "left", label: "居左" },
  { value: "center", label: "居中" },
  { value: "right", label: "居右" },
];

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
