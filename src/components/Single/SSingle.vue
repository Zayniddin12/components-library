<template>
  <div
    class="bg-[#1F272A] border border-dark-700 rounded-xl p-5 max-w-[900px] mx-auto"
  >
    <BlockPreloader
      v-bind="{ loading }"
      width="100%"
      preloader-class="dark !h-[76px]"
    >
      <h2
        class="text-white font-bold leading-130 md:leading-[38px] text-xl sm:text-2xl md:text-[28px]"
      >
        {{ data?.title }}
      </h2>
    </BlockPreloader>
    <div
      class="flex items-center gap-1 mt-2 md:mt-5 text-white/40 text-sm md:text-base font-normal leading-140"
    >
      <BlockPreloader
        v-bind="{ loading }"
        width="121px"
        height="22px"
        preloader-class="dark"
      >
        <p>
          {{ data?.published_date }}
        </p>
      </BlockPreloader>
      <span class="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
      <BlockPreloader
        v-bind="{ loading }"
        width="40px"
        height="22px"
        preloader-class="dark"
      >
        <p>
          {{ data?.published_date_hour }}
        </p>
      </BlockPreloader>
    </div>
    <div class="aspect-[986/390] w-full mt-2 md:mt-4 mb-3 md:mb-6">
      <transition name="fade" mode="out-in">
        <div
          v-if="loading"
          class="w-full h-full animate-pulse bg-gray-400 rounded-xl"
        ></div>
        <img
          v-else
          class="w-full h-full rounded-xl"
          :src="data?.image"
          alt=""
        />
      </transition>
    </div>
    <div class="max-w-[906px] mx-auto">
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="flex flex-col gap-4">
          <BlockPreloader
            v-for="i in 12"
            :key="i"
            loading
            width="100%"
            height="24px"
            preloader-class="dark"
          />
        </div>
        <div v-else class="vhtml-text mt-6 mb-5" v-html="data?.content" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockPreloader from "@/components/BlockPreloader/BlockPreloader.vue";

interface Props {
  data: {
    title: string;
    published_date: string;
    content: string;
    image: string;
    published_date_hour: string;
  };
  loading: boolean;
}
defineProps<Props>();
</script>
<style>
.vhtml-text p {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #c2c4c5;
  word-break: break-word;
}
.vhtml-text a {
  color: #1c92e0;
}
.vhtml-text a:hover {
  text-decoration: underline;
}
.vhtml-text img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 20px 0;
}

.vhtml-text blockquote {
  margin: 20px 0;
  padding: 16px 16px 16px 64px;
  position: relative;
  background: #1a2226;
  border-radius: 20px;
}
.vhtml-text blockquote p {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 8px;
}
.vhtml-text blockquote p,
.vhtml-text blockquote {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #f7f9fa;
  font-style: italic;
}
.vhtml-text blockquote:after {
  content: "\e947";
  font-family: icomoon;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #1c92e0;
  font-size: 20px;
  line-height: 20px;
}

.vhtml-text ol li,
.vhtml-text ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #c2c4c5;
}
.vhtml-text ul,
.vhtml-text ol {
  padding-left: 20px;
  margin: 20px 0;
}
.vhtml-text ul {
  list-style: disc;
}
.vhtml-text ol {
  list-style: auto;
}

@media screen and (max-width: 768px) {
  .vhtml-text p,
  .vhtml-text blockquote {
    font-size: 16px;
    line-height: 140%;
  }
  .vhtml-text img,
  .vhtml-text blockquote,
  .vhtml-text ul,
  .vhtml-text ol {
    margin: 12px 0;
  }
}
@media (max-width: 640px) {
  .vhtml-text ol li,
  .vhtml-text blockquote,
  .vhtml-text ul li {
    font-size: 14px !important;
  }
}
</style>
