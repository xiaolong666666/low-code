<template>
  <div class="item">
    <div class="item-left">布局密度：</div>
    <div class="item-right">
      <el-select v-model="customGridSize" placeholder="Select">
        <el-option
          v-for="item in CUSTOM_GRID_SIZE_LIST"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
  <div class="wrapper">
    <div class="grid" :style="gridStr" ref="gridContainerRef">
      <template v-for="(item, i) in customGridSize">
        <template v-for="(item, j) in customGridSize">
          <div
            :class="[
              'grid_item',
              Math.min(move[0][0], move[1][0]) <= i + 1 &&
              i + 1 <= Math.max(move[0][0], move[1][0]) &&
              Math.min(move[0][1], move[1][1]) <= j + 1 &&
              j + 1 <= Math.max(move[0][1], move[1][1])
                ? 'grid_item_selecting'
                : '',
            ]"
          ></div>
        </template>
      </template>
    </div>
    <div v-for="(item, idx) in customArea" :key="item._id">
      <div
        :class="[
          'custom_area_item',
          selectedKey === item._id ? 'active' : 'inactivity',
        ]"
        :style="{
          left: `${item.left}px`,
          top: `${item.top}px`,
          width: `${item.width}px`,
          height: `${item.height}px`,
        }"
        @click="(e) => onSelect(e, item._id)"
        @mouseenter="onMouseenter"
      >
        <img v-if="item.url" :src="item.url" alt="img" />
        <div v-else>
          <div>{{ item.content }}</div>
          <div>或同等比例</div>
        </div>
      </div>
    </div>
  </div>
  <ImageLocalUpload @change="(v) => onUploadImg(v)" />
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { debounce } from "lodash";
import ImageLocalUpload from "@lc/image-local-upload/index.vue";
import { getUuid } from "@/utils/uuid";

const gridContainerRef = ref(null);
const { containerWidth, computeGridStr, change } = defineProps([
  "containerWidth",
  "computeGridStr",
  "change",
]);

const CUSTOM_GRID_SIZE_LIST = [4, 5, 6, 7].map((v) => ({
  value: v,
  label: `${v}X${v}`,
}));
const customGridSize = ref(CUSTOM_GRID_SIZE_LIST[0].value);
const side = computed(() => Math.ceil(containerWidth / customGridSize.value));
const move = ref([[], []]);
const gridStr = ref(computeGridStr(customGridSize.value, customGridSize.value));
const origin = ref({});
const customArea = ref([]);
const selectedKey = ref();

function onUploadImg(v) {
  const idx = customArea.value.findIndex(
    (area) => area._id === selectedKey.value
  );
  customArea.value[idx]["url"] = v;
}

watch(customGridSize, (newValue) => {
  gridStr.value = computeGridStr(newValue, newValue);
});

const getIdx = (v) => Math.ceil(v / side.value);

const getMoveRowCol = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const col = getIdx(x - origin.value.originX);
  const row = getIdx(y - origin.value.originY);

  return { row, col };
};

const onMouseEvent = () => {
  if (gridContainerRef.value) {
    const { x: originX, y: originY } =
      gridContainerRef.value.getBoundingClientRect();
    origin.value = { originX, originY };

    let isMouseDown = false;

    gridContainerRef.value.addEventListener("mousedown", function (event) {
      isMouseDown = true;
      const { row, col } = getMoveRowCol(event);
      move.value = [
        [row, col],
        [row, col],
      ];
    });

    gridContainerRef.value.addEventListener("mousemove", function (event) {
      if (isMouseDown) {
        const { row, col } = getMoveRowCol(event);
        if (row !== move.value[1][0]) move.value[1][0] = row;
        if (col !== move.value[1][1]) move.value[1][1] = col;
      }
    });

    gridContainerRef.value.addEventListener("mouseup", function (event) {
      const rowStart = Math.min(move.value[0][0], move.value[1][0]);
      const rowEnd = Math.max(move.value[0][0], move.value[1][0]) + 1;
      const colStart = Math.min(move.value[0][1], move.value[1][1]);
      const colEnd = Math.max(move.value[0][1], move.value[1][1]) + 1;

      const height =
        (Math.abs(move.value[1][0] - move.value[0][0]) + 1) * side.value;
      const width =
        (Math.abs(move.value[1][1] - move.value[0][1]) + 1) * side.value;
      const top = (rowStart - 1) * side.value;
      const left = (colStart - 1) * side.value;

      isMouseDown = false;
      const _id = getUuid();
      const newArea = {
        _id,
        left,
        top,
        width,
        height,
        content: `${width}x${height}像素`,
        gridArea: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`,
      };
      selectedKey.value = _id;
      customArea.value = [...customArea.value, newArea];
      move.value = [[], []];
    });
  }
};

onMounted(() => {
  onMouseEvent();
  document?.addEventListener("scroll", debounce(onScrollEvent, 200));
});

onUnmounted(() => {
  document?.removeEventListener("scroll", debounce(onScrollEvent, 200));
  gridContainerRef.value?.removeEventListener("mousedown");
  gridContainerRef.value?.removeEventListener("mousemove");
  gridContainerRef.value?.removeEventListener("mouseup");
});

function onScrollEvent() {
  if (gridContainerRef.value) {
    const { x: originX, y: originY } =
      gridContainerRef.value.getBoundingClientRect();
    origin.value = { originX, originY };
  }
}

const onSelect = (e, _id) => {
  const width = parseInt(getComputedStyle(e.target).width);

  if (
    e.layerX >= width - 6 &&
    e.layerX <= width + 6 &&
    e.layerY >= -6 &&
    e.layerY <= 6
  ) {
    onClose(e, _id);
  } else {
    selectedKey.value = _id;
  }
};

const onClose = (e, _id) => {
  const idx = customArea.value.findIndex((item) => item._id === _id);

  customArea.value.splice(idx, 1);
};

const onMouseenter = () => {
  move.value = [[], []];
};

const customVariables = computed(() => {
  return {
    customArea: customArea.value,
    customGridSize: customGridSize.value,
  };
});

watch(
  customVariables,
  ({ customArea: newCustomArea, customGridSize: newCustomGridSize }) => {
    // change(newValue);
    const area = newCustomArea.map(({ gridArea, url }) => ({ gridArea, url }));
    const customLayout = {
      label: "自定义",
      icon: "/layouts/custom.svg",
      rows: newCustomGridSize,
      cols: newCustomGridSize,
      area,
    };
    change(customLayout);
  },
  { deep: true }
);
</script>

<style scoped>
@import url(@/components/configs/common-config.css);
.wrapper {
  position: relative;
  left: 0px;
  top: 0px;
  font-size: 12px;
}

.custom_area_item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  box-sizing: border-box;
}

.custom_area_item:hover::after {
  display: block;
}

.custom_area_item::after {
  display: none;
  content: "x";
  position: absolute;
  top: -6px;
  right: -6px;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 9px;
}

.active {
  border: 1px solid #155bd4;
  background: #e0edff;
}

.inactivity {
  border: 1px solid #ebedf0;
}
</style>
