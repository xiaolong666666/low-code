<template>
  <RadioButtonGroup
    :dataSource="borderRadiusList"
    :v="borderRadius"
    :change="onChange"
  />
</template>

<script setup>
import RadioButtonGroup from "@lc/common/radio-button-group.vue";

const { borderRadius } = defineProps(["borderRadius"]);
const emit = defineEmits(["change"]);

const borderRadiusList = [
  { value: "unset", label: "正常" },
  { value: "50%", label: "椭圆" },
];

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
