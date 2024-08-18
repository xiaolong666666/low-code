<template>
  <div>
    <div>
      <pre>{{ JSON.stringify(info, null, 4) }}</pre>
    </div>
    <div class="item">
      <div class="item-left">文本内容：</div>
      <div class="item-right">
        <input
          v-model="info.content"
          @input="(e) => change('content', e.target.value)"
        />
      </div>
    </div>
    <div class="item">
      <div class="item-left">文本方向：</div>
      <div class="item-right">
        <TextAlignGroup
          :textAlign="info.style.textAlign"
          @change="(v) => change('textAlign', v)"
        />
      </div>
    </div>
    <div class="item">
      <div class="item-left">字体大小：</div>
      <div class="item-right">
        <FontSizeInput
          :fontSize="info.style.fontSize"
          @change="(v) => change('fontSize', v)"
        />
      </div>
    </div>
    <div class="item">
      <div class="item-left">字体粗细：</div>
      <div class="item-right">
        <FontWeightGroup
          :fontWeight="info.style.fontWeight"
          @change="(v) => change('fontWeight', v)"
        />
      </div>
    </div>
    <div class="item">
      <div class="item-left">字体颜色：</div>
      <div class="item-right">
        <input
          type="color"
          v-model="info.style.color"
          @input="(e) => change('color', e.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FontSizeInput from "@lc/font-size-input/index.vue";
import FontWeightGroup from "@lc/font-weight-group/index.vue";
import TextAlignGroup from "@lc/text-align-group/index.vue";

defineProps(["info"]);
const emit = defineEmits(["update"]);

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  margin: 8px 0;
  box-sizing: border-box;
}

.item-left {
  width: 30%;
}

.item-right {
  width: 60%;
  justify-content: space-between;
}

.item-right input {
  flex: 1;
  border: 1px solid black;
  border-radius: 4px;
}
</style>
