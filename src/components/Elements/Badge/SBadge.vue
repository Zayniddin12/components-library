<template>
  <button
    type="button"
    class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
  >
    <span :class="textStyle">{{ text }}</span>
    <div
      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2"
    >
      {{ count }}
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  textStyle?: string;
  count?: number;
}
// ******* PROPS *******
const props = withDefaults(defineProps<Props>(), {
  text: "Button",
  textStyle: "",
  count: 6,
});
</script>
