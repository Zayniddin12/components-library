<template>
  <div>
    <div class="mt-3 flex items-center gap-4">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-blue-400"
      >
        <p class="text-sm leading-[130%]">{{ formatTextAva }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  avaText?: string;
}

// ******* PROPS *******
const props = withDefaults(defineProps<Props>(), {
  avaText: "A",
});

const formatTextAva = computed(() => {
  return props.avaText.slice(0, 2).toUpperCase();
});
</script>
