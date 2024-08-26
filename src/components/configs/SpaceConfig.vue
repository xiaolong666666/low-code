<template>
  <div>
    <div class="item">
      <div class="item-left">留白大小：</div>
      <div class="item-right">
        <NumberInput
          :v="info.style.height"
          @change="(v) => change('height', v)"
          defaultValue="20"
          min="4"
          max="60"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import NumberInput from "@lc/number-input/index.vue";

defineProps(["info"]);
const emit = defineEmits(["update"]);

function change(k, v) {
  emit("update", k, v);
}
</script>

<style scoped>
@import url(./common-config.css);
</style>
