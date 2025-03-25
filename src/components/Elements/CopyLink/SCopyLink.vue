<template>
  <div
    class="relative group bg-[#F1F5F9] flex items-center hover:bg-[#35abb21a] transition duration-300 justify-between md:pl-3 rounded-lg h-11 group sm:max-w-[240px] cursor-pointer"
    @click="copyUrl"
  >
    <span
      class="!hidden md:!block whitespace-nowrap line-clamp-1 text-[#18182F] font-medium leading-130 text-base"
    >
      {{ copy_text }}
    </span>
    <span
      class="w-11 h-11 shrink-0 transition duration-300 rounded-lg flex items-center justify-center md:ml-2"
    >
      <i class="transition">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="8"
            width="12"
            height="12"
            rx="2"
            stroke="#7D7E8D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 8V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H8"
            stroke="#7D7E8D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>
    </span>

    <div
      class="absolute bottom-full left-1/2 -translate-x-1/2 transition duration-300"
      :class="[
        show ? '!-translate-y-4 !visible !opacity-100' : 'invisible opacity-0',
      ]"
    >
      <div
        class="tooltip bg-dark border border-[#4C4C4C] rounded-lg px-4 py-2 text-sm leading-4 text-white font-proxima relative"
      >
        {{ copy_tooltip }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);
function copyUrl() {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = window.location.href;
  input.select();
  input.focus();
  document.execCommand("copy");
  input.remove();
  copied.value = true;

  setTimeout(() => {
    copied.value = false;
  }, 1500);
}

interface Props {
  copy_text?: string;
  copy_tooltip?: string;
  show?: boolean;
}

withDefaults(defineProps<Props>(), {
  copy_text: "Скопировать ссылку ",
  copy_tooltip: "copied",
});
</script>

<style scoped>
.tooltip {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.tooltip::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -1px) rotate(180deg);
  width: 20px;
  height: 9px;
  background: black;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
