<template>
  <div>
    <div>
      <pre class="overflow-x-auto">{{ JSON.stringify(info, null, 4) }}</pre>
    </div>
    <div class="item">
      <div class="item-left">图片上传方式：</div>
      <div class="item-right">
        <ImageMethodGroup :behavior="behavior" @change="changeBehavior" />
      </div>
    </div>
    <div v-if="behavior === 'importWithUrl'" class="item">
      <div class="item-left">图片地址：</div>
      <div class="item-right">
        <ContentInput :value="info.url" @input="(v) => change('url', v)" />
      </div>
    </div>
    <div v-else class="item">
      <div class="item-left">本地上传：</div>
      <div class="item-right">
        <ImageLocalUpload :value="info.url" @change="(v) => change('url', v)" />
      </div>
    </div>
    <div class="item">
      <div class="item-left">图片形状：</div>
      <div class="item-right">
        <ImageRadiusGroup
          :borderRadius="info.style.borderRadius"
          @change="(v) => change('borderRadius', v)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageMethodGroup from "@lc/image-method-group/index.vue";
import ContentInput from "@lc/content-input/index.vue";
import ImageLocalUpload from "@lc/image-local-upload/index.vue";
import ImageRadiusGroup from "@lc/image-radius-group/index.vue";
defineProps(["info"]);
const emit = defineEmits(["update"]);

const behavior = ref("importWithUrl");

function changeBehavior(v) {
  behavior.value = v;
}

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
@import url(./common-config.css);
</style>
