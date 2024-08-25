<template>
  <el-upload :before-upload="onBeforeUpload">
    <el-button type="primary">点击上传图片</el-button>
  </el-upload>
</template>

<script setup>
const { fontSize } = defineProps(["fontSize"]);
const emit = defineEmits(["change"]);

const onBeforeUpload = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    onChange(e.target.result);
  };
};

function onChange(v) {
  emit("change", v);
}
</script>

<style scoped></style>
