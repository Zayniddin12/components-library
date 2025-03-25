<template>
  <div
    class="rounded-lg flex group w-full cursor-pointer bg-[#1A1D1F] p-3 flex-col"
  >
    <div class="w-full overflow-hidden aspect-video">
      <BlockPreloader
        v-bind="{ loading }"
        border-radius="4px"
        width="100%"
        height="100%"
        margin="0 0px 0 0"
        preloader-class="dark"
      >
        <img
          :src="data?.image"
          alt="images"
          class="w-full h-full object-cover rounded-t"
        />
      </BlockPreloader>
    </div>
    <div class="w-full mt-2">
      <div class="flex-center-between">
        <BlockPreloader
          v-bind="{ loading }"
          border-radius="4px"
          width="40%"
          height="18px"
          margin="8px 0px 0 0"
          preloaderClass="dark"
        >
          <p
            class="font-normal leading-[18px] text-sm text-[#f7f9fa66] duration-300"
          >
            {{ data?.published_date }}
          </p>
        </BlockPreloader>
      </div>
      <BlockPreloader
        v-bind="{ loading }"
        border-radius="4px"
        width="100%"
        height="18px"
        margin="10px 0px 0 0"
        preloaderClass="dark"
      >
        <h4
          class="text-[#F7F9FA] font-130 font-medium md:my-1 leading-130 cursor-pointer transition duration-300 group-hover:text-[#1C92E0] line-clamp-2 text-sm"
        >
          {{ data?.title }}
        </h4>
      </BlockPreloader>
      <BlockPreloader
        v-bind="{ loading }"
        border-radius="4px"
        width="100%"
        :height="'18px'"
        margin="12px 0px 0 0"
        preloaderClass="dark"
      >
        <p class="text-[#9DA1A3] font-130 font-medium text-sm line-clamp-2">
          {{ data?.short_description }}
        </p>
      </BlockPreloader>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockPreloader from "@/components/BlockPreloader/BlockPreloader.vue";
// import Highlighter from "vue-highlight-words";
interface Props {
  data?: {
    published_date: string;
    short_description: string;
    image: string;
    title: string;
  };
  loading?: boolean;
}

defineProps<Props>();
</script>
