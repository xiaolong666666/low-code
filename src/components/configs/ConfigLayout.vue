<template>
  <div class="w-full">
    <div
      class="w-full flex items-center px-3 font-medium text-xl size-12 border-b border-s-cyan-400"
    >
      <slot name="header"></slot>
    </div>
    <div class="px-3">
      <slot name="default"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
