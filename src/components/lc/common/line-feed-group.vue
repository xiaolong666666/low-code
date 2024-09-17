<template>
  <div class="group">
    <template v-for="item in dataSource" :key="item">
      <div
        @click="() => change(item.value)"
        :class="[v.value === item.value ? 'seleced' : '']"
      >
        <img
          :src="item.icon"
          alt=""
          :class="[
            'layout-img',
            item.value === '一左三右' ? 'layout-img-special' : '',
          ]"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
const { dataSource, v, change } = defineProps(["dataSource", "v", "change"]);
</script>

<style scoped>
.group {
  display: flex;
  flex-wrap: wrap;
}
.group div {
  width: calc(100% / 6);
  height: 30px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.group div:nth-child(6n + 1) {
  border-left: 1px solid #ccc;
}
.group div:nth-child(1),
.group div:nth-child(2),
.group div:nth-child(3),
.group div:nth-child(4),
.group div:nth-child(5),
.group div:nth-child(6) {
  border-top: 1px solid #ccc;
}
.group div:nth-child(1) {
  border-top-left-radius: 2px;
}
.group div:nth-child(6) {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.group div:nth-child(7) {
  border-bottom-left-radius: 2px;
}
.group div:nth-child(8) {
  border-bottom-right-radius: 2px;
}
.layout-img {
  width: 20px;
  height: 20px;
  opacity: 0.6;
}
.layout-img-special {
  width: 12px;
  height: 12px;
}
.seleced {
  background-color: bisque;
}
</style>
