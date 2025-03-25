<template>
  <div class="relative">
    <input
      id="custom-range"
      v-model="value"
      type="range"
      min="0"
      max="100"
      class="range-input w-full h-[12px] rounded-[1px] bg-[#ecf3fa]"
      @change="$emit('update:modelValue', mathOnly)"
    />
    <div
      :style="{
        width: value + '%',
        height: '10px',
      }"
      :data-value="value"
      class="bg-blue-main absolute top-1.5 rounded-[1px] cursor-pointer"
      @click="rangeClicked"
    ></div>

    <ul class="range-labels mt-2 p-0 list-none flex w-full">
      <li
        class="relative flex-grow w-[70px] text-center text-[#b2b2b2] text-sm cursor-pointer before:absolute before:top-[-24px] before:right-0 before:left-0 before:w-0.5 before:h-[8px] before:mx-auto before:bg-[#c6cfd7] before:z-0"
        :class="{
          'text-blue-main font-medium': mathOnly === `0` || mathOnly === '00',
        }"
      >
        0%
      </li>
      <li
        v-for="item in 10"
        :key="item"
        :class="{
          'text-blue-main font-medium': mathOnly === `${item}0`,
        }"
        class="relative flex-grow w-[70px] text-center text-[#b2b2b2] text-sm cursor-pointer before:absolute before:top-[-24px] before:right-0 before:left-0 before:w-0.5 before:h-[8px] before:mx-auto before:bg-[#c6cfd7] before:z-0 last:w-[50px] last:before:bg-[#c6cfd7] last:before:-right-9"
      >
        {{ item }}0%
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

export interface Props {
  modelValue: number | string;
}
defineProps<Props>();

const value = ref(0);

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();

const mathOnly = computed(() => {
  if (String(value.value).length === 1) {
    return "0";
  }

  return +value.value;
});

function rangeClicked(e: MouseEvent) {
  const moneyRange = document.querySelector(
    "#custom-range"
  ) as HTMLInputElement;
  value.value = (e?.offsetX / moneyRange.offsetWidth) * 100;
  emit("update:modelValue", mathOnly.value);
}
</script>

<style scoped>
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 20px; /* Set a specific slider handle width */
  height: 20px; /* Slider handle height */
  background: #1385fa; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 100%;
}

.range-input::-webkit-slider-runnable-track {
  z-index: 198;
}

@media all and (max-width: 400px) {
  .range-labels li:nth-child(even) {
    display: none;
  }
}

@media all and (max-width: 768px) {
  .range-labels li:nth-child(11) {
    width: 70px;
  }
}
</style>
