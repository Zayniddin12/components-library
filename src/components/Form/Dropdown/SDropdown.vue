<template>
  <div
    :class="[
      wrapperClass,
      { 'dropdown-active': opened },
      'dropdown select-none inline-block rounded-[8px] cursor-pointer !relative transition duration-150',
    ]"
  >
    <div
      class="flex items-center justify-between gap-[5px]"
      @click.stop="opened = !opened"
    >
      <slot name="head" />
      <div
        v-if="arrow"
        class="flex-center w-4 h-4 transition duration-300 rotate-90"
        :class="[
          full ? 'absolute right-[10px]' : '',
          opened ? '!rotate-[270deg]' : '',
          arrowDisplay ? 'sl:!inline-flex !hidden' : '',
        ]"
      >
        <SIcon icon="icon-chevron" :class="arrowClass" />
      </div>
    </div>
    <transition name="dropdown">
      <div
        v-if="opened"
        class="dropdown__list overflow-auto top-[150%] absolute w-auto h-auto bg-white rounded-[8px] opacity-0 !-[0] transition duration-150 -551:min-w-[140px] z-10"
        :class="[
          { '!w-full': full },
          {
            '!top-[-800%] !left-0': above,
            'left-0': position === 'left',
            'right-0': position === 'right',
          },
          bodyClass,
        ]"
        @click.capture="handleCloseDropdown"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="pl-3 hover:bg-[#d5d5d545] transform duration-300 min-w-[245px]"
          @click.stop="$emit('on-handle')"
        >
          <div
            class="py-4 border-b border-solid border-[#F3F5F8] flex items-center gap-2.5"
            :class="{ 'border-t border-solid border-[#F3F5F8]': index !== 0 }"
          >
            <SIcon
              :icon="item.icon"
              :class="item.icon === 'icon-delete-3' ? 'text-red-900' : ''"
            />
            <p class="text-blue-900 text-sm font-normal">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

import SIcon from "@/components/Icon/SIcon.vue";

interface Props {
  arrow?: boolean;
  arrowClass?: string;
  full?: boolean;
  removeEvent?: boolean;
  above: boolean;
  wrapperClass?: string;
  bodyClass?: string;
  arrowDisplay?: boolean;
  close?: boolean;
  disabled: boolean;
  position?: "right" | "left";
  list?: {
    icon: string;
    name: string;
  }[];
}
const props = withDefaults(defineProps<Props>(), {
  arrow: false,
  full: false,
  removeEvent: false,
  above: false,
  arrowClass: "",
  wrapperClass: "",
  arrowDisplay: false,
  disabled: false,
  position: "right",
});

const emit = defineEmits<{
  (e: "on-toggle", value: boolean): void;
}>();

let opened = ref(false);
watch(opened, (newValue) => emit("on-toggle", newValue));

onMounted(() => {
  if (!props.removeEvent) {
    document.addEventListener("mousedown", hideEvent);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", hideEvent);
});

watch(
  () => props.removeEvent,
  (newV) => {
    if (newV) {
      document.removeEventListener("mousedown", hideEvent);
    } else {
      document.addEventListener("mousedown", hideEvent);
    }
  }
);

const hideEvent = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target?.closest(".dropdown-active") && opened.value) {
    opened.value = false;
  }
};

function handleCloseDropdown() {
  if (!props.removeEvent) {
    opened.value = !opened.value;
  }
}
</script>

<style scoped>
.dropdown-active .dropdown__list {
  box-shadow: 0 5px 8px rgba(51, 64, 85, 0.04),
    inset 0 -1px 0 rgba(182, 186, 191, 0.2);
  background: #fff;
  opacity: 1;
  transform-origin: top center;
  border: 1px solid #f3f5f8;
}

.dropdown-enter-active {
  animation: dropdown 300ms ease-out;
}
.dropdown-leave-active {
  animation: dropdown 300ms ease-in reverse;
}

@keyframes dropdown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
