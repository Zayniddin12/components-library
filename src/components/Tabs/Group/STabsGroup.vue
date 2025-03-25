<template>
  <div class="relative p-1 bg-dark-700 rounded-lg flex overflow-hidden">
    <div
      :class="activeClass"
      class="absolute h-[calc(100%_-_8px)] rounded bg-[#1C92E0] w-full -translate-y-1/2 top-1/2 transition-all duration-300"
      :style="{ width: `${active.width}px`, left: `${active.left}px` }"
    ></div>
    <button
      :class="[itemClass]"
      class="p-2 rounded-sm transition-300 w-full text-sm font-medium z-10 text-white"
      :id="`item_${tab.value}`"
      v-for="(tab, idx) in list"
      :key="idx"
      @click="pick(tab.value, $event)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface Tab {
  label: string;
  value: string | number;
}
interface Props {
  modelValue?: string | number;
  list: Tab[];
  itemClass?: string;
  activeClass?: string;
}
const props = defineProps<Props>();

interface Emits {
  (e: "update:modelValue", value: string | number): void;
}
const $emit = defineEmits<Emits>();

// const active = ref({ left: 0, width: 0 });
const active = ref({ left: 0, width: 0 });
const pick = (tab: string | number, e?: { target: HTMLButtonElement }) => {
  const target = e.target as HTMLButtonElement;
  active.value = {
    left: target?.offsetLeft,
    width: target?.offsetWidth,
  };
  $emit("update:modelValue", tab);
};

onMounted(() => {
  const item = document.getElementById(
    `item_${props.modelValue}`
  ) as HTMLButtonElement;
  pick(props.modelValue, { target: item });
});
</script>
