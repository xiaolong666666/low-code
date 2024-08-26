<template>
  <div>
    <div>
      <pre>{{ JSON.stringify(info, null, 4) }}</pre>
    </div>
    <div class="item">
      <div class="item-left">文本内容：</div>
      <div class="item-right">
        <ContentInput
          :value="info.content"
          @input="(v) => change('content', v)"
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
        <NumberInput
          :v="info.style.fontSize"
          @change="(v) => change('fontSize', v)"
          defaultValue="14"
          min="12"
          max="36"
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
        <FontColorInput
          :color="info.style.color"
          @change="(v) => change('color', v)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentInput from "@lc/content-input/index.vue";
import NumberInput from "@lc/number-input/index.vue";
import FontWeightGroup from "@lc/font-weight-group/index.vue";
import TextAlignGroup from "@lc/text-align-group/index.vue";
import FontColorInput from "@lc/font-color-input/index.vue";

defineProps(["info"]);
const emit = defineEmits(["update"]);

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
@import url(./common-config.css);
</style>
