<template>
  <el-radio-group v-model="value" @change="change">
    <template v-for="item in dataSource" :key="item">
      <el-radio-button :label="item.label" :value="item.value" />
    </template>
  </el-radio-group>
</template>

<script setup>
import { ref } from "vue";
const { dataSource, v, change } = defineProps(["dataSource", "v", "change"]);
const value = ref(v);
</script>

<style scoped></style>
