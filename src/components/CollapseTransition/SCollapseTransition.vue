<template>
  <div class="mt-[32px] relative">
    <h2 data-aos="fade-left" class="relative mb-4 section-title">
      Title Collapse Transition
    </h2>
    <div class="relative">
      <span
        v-if="goalElse && goalElse.length"
        class="absolute w-full h-1/2 -bottom-[5px] shadow-section rounded-b-[20px] transition duration-200"
        :class="{ 'opacity-0': openMore }"
      />
      <div
        v-for="(item, i) in goal"
        :key="i"
        class="py-5 md:px-6 px-4 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4"
        :class="{ '!mb-0': i === goal.length - 1 }"
      >
        <p class="text-base leading-137 text-dark">
          {{ item.text }}
        </p>
      </div>
      <CollapseTransition>
        <div v-if="openMore" class="pt-4">
          <div
            v-for="(item, i) in goalElse"
            :key="i"
            class="py-5 px-6 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4"
          >
            <p class="text-base leading-137 text-dark">
              {{ item.text }}
            </p>
          </div>
        </div>
      </CollapseTransition>
    </div>

    <SButton
      text="Show more"
      v-if="goalElse && goalElse.length"
      :is-hide="openMore"
      @click="openMore = !openMore"
      class="mt-4"
    />
  </div>
</template>

<script lang="ts" setup>
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import { defineProps, onMounted, ref } from "vue";

import SButton from "@/components/Button/SButton.vue";

const openMore = ref(false);

const arr = [
  {
    id: 1,
    title: "title-1",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 2,
    title: "title-2",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 1,
    title: "title-1",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 2,
    title: "title-2",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 1,
    title: "title-1",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 2,
    title: "title-2",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 1,
    title: "title-1",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 2,
    title: "title-2",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 1,
    title: "title-1",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
  {
    id: 2,
    title: "title-2",
    text: "If you are reading this, you have super power like Captain Marvel, because you can read docs too!",
  },
];
const goal = ref([]);
const goalElse = ref([]);

onMounted(async () => {
  goal.value = arr.slice(0, 3);
  goalElse.value = arr.slice(3);
});
</script>

<style>
.shadow-section {
  background: linear-gradient(180deg, rgba(250, 250, 252, 0), #fafafc);
}
</style>
