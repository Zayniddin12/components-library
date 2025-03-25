<template>
  <Modal
    :show="show"
    body-wrapper-class="!bg-transparent !max-w-[310px] !shadow-none relative"
    body-class=""
  >
    <button
      class="icon-xmark w-10 h-10 rounded bg-white flex-center text-dark text-2xl absolute md:-right-14 md:top-0 right-0 -top-14 leading-8 hover:text-red transition-300"
      @click="$emit('close')"
    />
    <div class="rounded-lg mb-2 relative w-full bg-white max-w-[310px] mx-auto">
      <!--      Todo: in storybook styles are not working properly-->
      <!--      <div-->
      <!--        class="flex items-center justify-between gap-1 absolute-x w-full z-100 top-[50%] -translate-y-[50%]"-->
      <!--      >-->
      <!--        <button-->
      <!--          class="button-report-prev cursor-pointer w-10 h-10 md:-ml-12 ml-3 rounded-full border border-transparent md:bg-gray-700 bg-gray-700/40 flex-center hover:border-blue-100 transition-300"-->
      <!--        >-->
      <!--          <i class="icon-chevron rotate-90 text-white" />-->
      <!--        </button>-->
      <!--        <button-->
      <!--          class="button-report-next cursor-pointer w-10 h-10 rounded-full md:-mr-12 mr-3 border border-transparent md:bg-gray-700 bg-gray-700/40 flex-center hover:border-blue-100 transition-300"-->
      <!--        >-->
      <!--          <i class="icon-chevron -rotate-90 text-white" />-->
      <!--        </button>-->
      <!--      </div>-->
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        v-bind="settings"
        :thumbs="{ swiper: thumbsSwiper }"
        class="mySwiper2 w-full aspect-square"
      >
        <swiper-slide
          v-for="(i, idx) in images"
          :key="idx"
          class="!max-w-[310px] mx-auto rounded-lg"
        >
          <img
            alt="image"
            class="!max-w-[310px] w-full h-full object-cover rounded-lg"
            :src="i?.default"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full flex items-center justify-center">
      <swiper
        :space-between="16"
        slides-per-view="auto"
        :free-mode="true"
        :watch-slides-progress="true"
        :modules="modules"
        class="mySwiper"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide
          v-for="(i, idx) in images"
          :key="idx"
          class="border border-transparent !w-[80px] !h-[80px] box-border rounded-lg overflow-hidden cursor-pointer group"
        >
          <div
            class="bg-white rounded-md overflow-hidden w-full h-full opacity-50 transition-300 img group-hover:opacity-70"
          >
            <img
              alt="image"
              class="w-full h-full object-cover"
              :src="i?.default"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import "swiper/css";

import { FreeMode, Keyboard, Navigation, Thumbs } from "swiper";
// import { SwiperEvents } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineProps, ref } from "vue";

type TImages = {
  default: string;
  extra_small: string;
  large: string;
  medium: string;
  small: string;
};
interface Props {
  images?: TImages[];
  loading?: boolean;
  show?: boolean;
}
defineProps<Props>();

const thumbsSwiper = ref();
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Thumbs, Keyboard, Navigation];

const settings = {
  keyboard: {
    enabled: true,
  },
  spaceBetween: 10,
  navigation: {
    prevEl: ".button-report-prev",
    nextEl: ".button-report-next",
  },
  modules,
};
</script>

<style>
.swiper-slide {
  transition: 0.3s ease-in-out !important;
}
.swiper-slide-thumb-active {
  opacity: 100 !important;
  border: 1px solid blue !important;
}

.swiper-slide-thumb-active .img {
  opacity: 100 !important;
}
</style>
