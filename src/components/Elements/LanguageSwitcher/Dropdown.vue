<template>
  <div class="!relative min-w-fit inline-block" @focusout="onClickAway">
    <button
      class="custom-hover px-3 py-2 text-sm flex items-center group rounded-lg transition-all duration-150 hover:text-gray-200 text-dark"
      :class="buttonClass"
      @click="onClick"
    >
      <slot name="head" />
    </button>
    <transition name="dropdown">
      <ul
        v-if="dropDownActive"
        class="bg-white drop-shadow-[0_4px_24px_rgba(72,79,92,0.04)] border border-gray-150 absolute top-[44px] right-0 w-full h-auto overflow-hidden !z-50 flex flex-col cursor-pointer"
        :class="listStyle"
        @click="onClickAway"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  title?: string;
  listStyle?: string;
  buttonClass?: string | [string];
}
withDefaults(defineProps<Props>(), {});

const emit = defineEmits(["on-click"]);
const dropDownActive = ref(false);

const onClick = () => {
  dropDownActive.value = !dropDownActive.value;
  emit("on-click", dropDownActive.value);
};

function onClickAway() {
  dropDownActive.value = false;
}
</script>

<style>
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
