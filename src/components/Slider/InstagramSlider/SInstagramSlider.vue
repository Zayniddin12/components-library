<template>
  <div>
    <div class="container mx-auto px-4 pt-10 pb-7">
      <div class="flex items-center">
        <div
          :class="changeLogo ? 'rotateY' : ''"
          class="w-[60px] h-[60px] flex items-center justify-center transition-all duration-500 insta-linear rounded-full relative"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="changeLogo ? 'opacity-0' : 'opacity-100'"
            class="transition-all duration-500 absolute"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.6717 0.478093L17.8124 5.89652H15.8469L16.3515 0L19.6717 0.478093ZM15.5768 8.15165L6.44962 28H10.4974L12.302 24.0757H21.3421L23.1467 28H27.1944L18.0673 8.15165H15.5768ZM13.9931 20.3981L16.822 14.2461L19.651 20.3981H13.9931ZM9.50733 9.07664L9.93268 8.15165H13.9805L12.8486 10.6131L4.85333 28H0.805542L9.50733 9.07664Z"
              fill="white"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="changeLogo ? 'opacity-100' : 'opacity-0'"
            class="transition-all duration-500 absolute rotate-[270deg]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 2C12.1978 2 11.7211 2.01611 10.2278 2.08425C8.7377 2.15221 7.71997 2.3889 6.82946 2.73501C5.90884 3.09273 5.1281 3.57144 4.34975 4.34974C3.57145 5.12809 3.09273 5.90884 2.73501 6.82946C2.3889 7.71997 2.15222 8.73768 2.08426 10.2278C2.01612 11.7211 2 12.1978 2 16C2 19.8022 2.01612 20.2789 2.08426 21.7722C2.15222 23.2623 2.3889 24.28 2.73501 25.1705C3.09273 26.0912 3.57145 26.8719 4.34975 27.6503C5.1281 28.4286 5.90884 28.9073 6.82946 29.265C7.71997 29.6111 8.7377 29.8478 10.2278 29.9158C11.7211 29.9839 12.1978 30 16 30C19.8022 30 20.2789 29.9839 21.7722 29.9158C23.2623 29.8478 24.28 29.6111 25.1705 29.265C26.0911 28.9073 26.8719 28.4286 27.6503 27.6503C28.4286 26.8719 28.9072 26.0912 29.265 25.1705C29.6111 24.28 29.8478 23.2623 29.9158 21.7722C29.9839 20.2789 30 19.8022 30 16C30 12.1978 29.9839 11.7211 29.9158 10.2278C29.8478 8.73768 29.6111 7.71997 29.265 6.82946C28.9072 5.90884 28.4286 5.12809 27.6503 4.34974C26.8719 3.57144 26.0911 3.09273 25.1705 2.73501C24.28 2.3889 23.2623 2.15221 21.7722 2.08425C20.2789 2.01611 19.8022 2 16 2ZM16 4.52251C19.7382 4.52251 20.181 4.5368 21.6572 4.60415C23.0222 4.6664 23.7635 4.89447 24.2568 5.08619C24.9103 5.34016 25.3767 5.64354 25.8665 6.13347C26.3565 6.62335 26.6598 7.08972 26.9138 7.7432C27.1055 8.23652 27.3336 8.97781 27.3958 10.3428C27.4632 11.819 27.4775 12.2618 27.4775 16C27.4775 19.7381 27.4632 20.181 27.3958 21.6572C27.3336 23.0222 27.1055 23.7635 26.9138 24.2568C26.6598 24.9103 26.3565 25.3766 25.8665 25.8665C25.3767 26.3565 24.9103 26.6598 24.2568 26.9138C23.7635 27.1055 23.0222 27.3336 21.6572 27.3958C20.1812 27.4632 19.7384 27.4775 16 27.4775C12.2616 27.4775 11.8189 27.4632 10.3428 27.3958C8.97781 27.3336 8.23652 27.1055 7.7432 26.9138C7.08972 26.6598 6.62334 26.3565 6.13346 25.8665C5.64359 25.3766 5.34016 24.9103 5.08619 24.2568C4.89447 23.7635 4.6664 23.0222 4.60415 21.6572C4.5368 20.181 4.52251 19.7381 4.52251 16C4.52251 12.2618 4.5368 11.819 4.60415 10.3428C4.6664 8.97781 4.89447 8.23652 5.08619 7.7432C5.34016 7.08972 5.64353 6.62335 6.13346 6.13347C6.62334 5.64354 7.08972 5.34016 7.7432 5.08619C8.23652 4.89447 8.97781 4.6664 10.3428 4.60415C11.819 4.5368 12.2619 4.52251 16 4.52251ZM16 8.81082C12.0295 8.81082 8.81082 12.0295 8.81082 16C8.81082 19.9705 12.0295 23.1892 16 23.1892C19.9705 23.1892 23.1892 19.9705 23.1892 16C23.1892 12.0295 19.9705 8.81082 16 8.81082ZM16 20.6667C13.4227 20.6667 11.3333 18.5773 11.3333 16C11.3333 13.4227 13.4227 11.3333 16 11.3333C18.5773 11.3333 20.6667 13.4227 20.6667 16C20.6667 18.5773 18.5773 20.6667 16 20.6667ZM25.1532 8.52678C25.1532 9.45463 24.4011 10.2068 23.4732 10.2068C22.5454 10.2068 21.7932 9.45463 21.7932 8.52678C21.7932 7.59893 22.5454 6.84675 23.4732 6.84675C24.4011 6.84675 25.1532 7.59893 25.1532 8.52678Z"
              fill="white"
            />
          </svg>
        </div>

        <div class="ml-3">
          <p class="md:text-base sm:text-sm text-xs text leading-[130%] mb-1">
            Follow us
          </p>
          <a
            target="_blank"
            class="font-bold md:text-[28px] sm:text-2xl text-xl leading-[130%] text-dark instagram-link md:hover:text-red-900 transition-all duration-300"
            :href="`https://www.instagram.com/uic.group/`"
          >
            @uic.group
          </a>
        </div>
      </div>
    </div>
    <swiper
      class="!w-full instagramSwiper"
      slidesPerView="auto"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay]"
      v-if="slides?.length"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
        class="group relative !w-[200px] !h-[200px] md:!w-[280px] md:!h-[280px] md:hover:cursor-pointer"
      >
        <a
          :href="item?.link"
          target="_blank"
          class="w-full h-full preloader-image"
        >
          <img
            aria-label="instagram image"
            :src="item?.get_img"
            alt=""
            class="w-full h-full object-cover object-top"
          />
          <div
            class="bg-blue-900 bg-opacity-50 transition duration-300 absolute w-full h-full opacity-0 md:group-hover:opacity-80 top-0 left-0"
          />
          <i
            class="text-[40px] text-white icon-share leading-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 md:group-hover:opacity-100 transition duration-300"
          />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import "swiper/css";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

export interface Props {
  slides?: [
    {
      link: string;
      get_img: string;
    }
  ];
}
defineProps<Props>();
const changeLogo = ref(false);

setInterval(() => {
  changeLogo.value = !changeLogo.value;
}, 2000);
</script>

<style scoped>
.insta-linear {
  background: linear-gradient(
    135deg,
    #405de6 0%,
    #586ae6 0.01%,
    #5851db 19.27%,
    #833ab4 40.1%,
    #c13584 56.25%,
    #e1306c 74.12%,
    #fd1d1d 100%
  );
}
.rotateY {
  transform: rotateY(180deg);
}
</style>
