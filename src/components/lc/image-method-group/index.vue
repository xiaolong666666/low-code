<template>
  <RadioButtonGroup
    :dataSource="behaviorList"
    :v="behavior"
    :change="onChange"
  />
</template>

<script setup>
import RadioButtonGroup from "@lc/common/radio-button-group.vue";

const { behavior } = defineProps(["behavior"]);
const emit = defineEmits(["change"]);

const behaviorList = [
  { value: "importWithUrl", label: "url导入" },
  { value: "localUpload", label: "本地上传" },
];

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
