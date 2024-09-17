<template>
  <div>
    <div class="template_header">
      <div class="template_header_left">选择模板</div>
      <div>{{ current.label }}</div>
    </div>
    <LineFeedGroup
      :dataSource="LAYOUT_LIST"
      :v="current"
      :change="onSwitchLayout"
    />

    <hr style="margin: 20px 0" />

    <template v-if="current['value'] === '自定义'">
      <CustomGrid
        :containerWidth="containerWidth"
        :computeGridStr="computeGridStr"
        :change="change"
      />
    </template>
    <div v-else class="grid wrapper" :style="gridStr" ref="gridContainerRef">
      <template v-if="current['area']">
        <template
          v-for="({ gridArea, url }, idx) in current['area']"
          :key="idx"
        >
          <div
            @click="() => onSelect(idx)"
            :class="[
              'grid_item',
              idx === selectedKey ? 'grid_item_selected' : '',
            ]"
            :style="{ gridArea }"
          >
            <img v-if="url" :src="url" alt="img" />
            <div v-else-if="current['rows'] === 1">宽度{{ realSide }}像素</div>
            <div v-else>
              <div>
                {{ Math.ceil(realSide * getCols({ gridArea })) }}x{{
                  Math.ceil(realSide * getRows({ gridArea }))
                }}像素
              </div>
              <div>或同等比例</div>
            </div>
          </div>
        </template>
      </template>
    </div>

    <ImageLocalUpload
      v-if="current['value'] !== '自定义'"
      :value="info.url"
      @change="onUploadImg"
    />
  </div>
</template>

<script setup>
import { ref, toRaw, computed, watch, onMounted } from "vue";
import { cloneDeep } from "lodash";
import LineFeedGroup from "@lc/common/line-feed-group.vue";
import CustomGrid from "@lc/custom-grid/index.vue";
import ImageLocalUpload from "@lc/image-local-upload/index.vue";
import { LAYOUT_LIST } from "@/const";

defineProps(["info"]);

const containerWidth = 336;
const viewWidth = 750;
const current = ref(cloneDeep(LAYOUT_LIST[7]));
const {
  value: { rows, cols },
} = current;
const emit = defineEmits(["update"]);

const selectedKey = ref(0);

const onSelect = (idx) => {
  selectedKey.value = idx;
};

const computeGridStr = (rows, cols) => ({
  height: `${Math.ceil(containerWidth / cols) * rows}px`,
  gridTemplateColumns: `repeat(${cols}, ${Math.ceil(containerWidth / cols)}px)`,
  gridTemplateRows: `repeat(${rows}, ${Math.ceil(containerWidth / cols)}px)`,
});

const gridStr = ref(computeGridStr(rows, cols));
const realSide = computed(() => Math.ceil(viewWidth / current.value["cols"]));

const getRows = (gridItemStr) =>
  gridItemStr.gridArea.split("/")[2] - gridItemStr.gridArea.split("/")[0];

const getCols = (gridItemStr) =>
  gridItemStr.gridArea.split("/")[3] - gridItemStr.gridArea.split("/")[1];

function onSwitchLayout(v) {
  selectedKey.value = 0;
  if (v === "自定义") {
    current.value = LAYOUT_LIST.find((layout) => layout.value === v);
  } else {
    current.value = LAYOUT_LIST.find((layout) => layout.value === v);
    const {
      value: { rows, cols },
    } = current;
    gridStr.value = computeGridStr(rows, cols);
  }
}

watch(
  current,
  (newValue) => {
    change(newValue);
  },
  { deep: true }
);

onMounted(() => {
  change(current.value);
});

function onUploadImg(v) {
  current.value.area[selectedKey.value].url = v;
}

function change(v) {
  v = toRaw(v);
  emit("update", "config", v);
}
</script>

<style scoped>
@import url(./common-config.css);
.template_header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 12px 0;
  font-size: 14px;
  color: #323233;
}
.template_header_left {
  color: #969799;
}
</style>
