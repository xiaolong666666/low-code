<template>
  <div>
    <el-button :icon="Plus" @click="onAdd" class="add-image">
      添加图片
    </el-button>
    <div class="image-wrapper">
      <template v-for="(url, idx) in urlsValue" :key="url">
        <el-input
          v-model="inputValues[idx].value"
          style="max-width: 600px"
          placeholder="Please input"
          class="input-url"
        >
          <template #prepend>URL</template>
          <template #append>
            <el-button :icon="Delete" @click="onRemove(idx)" />
          </template>
        </el-input>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Plus, Delete } from "@element-plus/icons-vue";

const { info } = defineProps(["info"]);
const urlsValue = ref(info.urls);
const inputValues = ref(info.urls.map((url) => ({ value: url }))); //!!! 循环中修改 value，需要元素为 { value: url }
const emit = defineEmits(["update"]);

function onAdd() {
  if (urlsValue.value.length >= 3) return;
  urlsValue.value.push("");
  inputValues.value.push({ value: "" });
}

function onRemove(idx) {
  if (urlsValue.value.length <= 1) return;
  urlsValue.value.splice(idx, 1);
  inputValues.value.splice(idx, 1);
}

watch(
  () => inputValues,
  (newValue) => {
    newValue.value.forEach((v, i) => {
      if (newValue.value[i].value !== urlsValue.value[i]) {
        urlsValue.value[i] = newValue.value[i].value;
      }
    });

    change("urls", urlsValue.value);
  },
  {
    deep: true,
  }
);

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
@import url(./common-config.css);
.add-image {
  margin: 12px 0;
}
.image-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
