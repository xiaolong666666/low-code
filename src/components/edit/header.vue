<template>
  <div class="header">
    <div class="flex items-center gap-3">
      <router-link to="/">
        <span class="text-xl">🔙</span>
      </router-link>
      <el-button-group>
        <el-button type="normal" :icon="ArrowLeft" @click="onBackout"
          >撤销</el-button
        >
        <el-button type="normal" @click="onRecover"
          >恢复<el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </el-button-group>
    </div>
    <div class="flex gap-3">
      <el-button type="default">预览</el-button>
      <el-button type="default">保存</el-button>
      <el-button type="primary" @click="onPublish">发布</el-button>
    </div>
  </div>
</template>

<script setup>
import { ElButtonGroup, ElButton } from "element-plus";
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

const { onBackout, onRecover } = defineProps(["onBackout", "onRecover"]);

const onPublish = () => {
  // fetch("http://localhost:6969/api/page/create", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     title: "My Page",
  //     components: store.components,
  //   }),
  // })
};
</script>

<style scoped>
.header {
  @apply flex items-center justify-between h-14 px-2 border-b border-b-slate-200 box-border;
}
.el-icon--right {
  width: 14px;
  height: 14px;
}
</style>
