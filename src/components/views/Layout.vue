<template>
  <div class="grid" :style="gridStr">
    <template v-for="({ gridArea, url }, idx) in currentArea" :key="idx">
      <div class="grid_item" :style="{ gridArea }">
        <img v-if="url" :src="url" alt="img" />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, toRaw } from "vue";

const props = defineProps(["info"]);
const containerWidth = 300;

const computeGridStr = (rows, cols) => ({
  height: `${Math.ceil(containerWidth / cols) * rows}px`,
  gridTemplateColumns: `repeat(${cols}, ${Math.ceil(containerWidth / cols)}px)`,
  gridTemplateRows: `repeat(${rows}, ${Math.ceil(containerWidth / cols)}px)`,
});

const gridStr = ref(
  computeGridStr(
    props.info.settings.config.rows,
    props.info.settings.config.cols
  )
);

const currentArea = ref(toRaw(props.info.settings.config.area));

watch(
  () => props,
  (newValue) => {
    gridStr.value = computeGridStr(
      newValue.info.settings.config.rows,
      newValue.info.settings.config.cols
    );
    currentArea.value = toRaw(newValue.info.settings.config.area);
  },
  { deep: true }
);
</script>

<style scoped>
@import url(../configs/common-config.css);
</style>
