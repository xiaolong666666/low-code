<template>
  <RadioButtonGroup
    :dataSource="fontWeightList"
    :v="fontWeight"
    :change="onChange"
  />
</template>

<script setup>
import RadioButtonGroup from "@lc/common/radio-button-group.vue";

const { fontWeight } = defineProps(["fontWeight"]);
const emit = defineEmits(["change"]);

const fontWeightList = [
  { value: "lighter", label: "更细" },
  { value: "normal", label: "正常" },
  { value: "bold", label: "更粗" },
];

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
