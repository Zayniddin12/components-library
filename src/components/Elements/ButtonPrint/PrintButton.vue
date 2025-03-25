<template>
  <button
    class="relative group bg-[#F1F5F9] flex items-center sm:pl-3 hover:bg-[#35abb21a] rounded-lg h-11 transition duration-300 group max-w-[240px]"
    aria-label="button"
    @click="printPage"
  >
    <span
      class="whitespace-nowrap leading-130 font-medium text-[#18182F] line-clamp-1 !hidden sm:!block"
    >
      {{ title ?? $t("print") }}
    </span>
    <span
      class="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center sm:ml-2"
    >
      <i class="icon-printer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17H19C20.1046 17 21 16.1046 21 15V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V15C3 16.1046 3.89543 17 5 17H7"
            stroke="#7D7E8D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 9V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V9"
            stroke="#7D7E8D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="7"
            y="13"
            width="10"
            height="8"
            rx="2"
            stroke="#7D7E8D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>
    </span>
  </button>
</template>

<!-- Todo: Rename Component name as convention-->

<script setup lang="ts">
function printPage() {
  window.print();
}

interface Props {
  title?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Print",
});
</script>
