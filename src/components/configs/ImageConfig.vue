<template>
  <div>
    <div>
      <pre class="overflow-x-auto">{{ JSON.stringify(info, null, 4) }}</pre>
    </div>
  </div>
</template>

<script setup>
defineProps(["info"]);
</script>
