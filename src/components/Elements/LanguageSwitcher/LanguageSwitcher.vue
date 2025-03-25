<template>
  <CommonDropdown
    class="m-14"
    list-style="w-[162px] mt-3"
    @focusout="dropDownActive = false"
    @on-click="dropDownActive = !dropDownActive"
  >
    <template #head>
      <div
        class="flex items-center lg:py-2 lg:px-3 bg-transparent group transition-200 text-black"
      >
        <img
          :src="activeLanguage.img"
          :alt="activeLanguage.img"
          :class="[{ 'mr-3': !onlyIcon }]"
          :style="{ width: iconWidth }"
        />
        <span
          class="transition-200 text-black text-xs leading-130 font-roboto block"
          :class="{ hidden: onlyIcon }"
        >
          {{ activeLanguage.name }}
        </span>
        <span
          class="icon-chevron-down transition-200 inline-block text-[10px] ml-3 transform text-[#A2ABBE block"
          :class="[{ '!-rotate-180': dropDownActive, hidden: onlyIcon }]"
        ></span>
      </div>
    </template>
    <li
      v-for="(item, ind) in languageList"
      :key="item?.value"
      class="transition-200 flex items-center px-3 py-4 pr-3.5 text-sm text-dark relative cursor-pointer hover:bg-[#F3F6F9]"
      @click="changeLanguage(item)"
    >
      <div
        class="text-dark flex items-center gap-x-3"
        :class="{ '!text-dark': locale === item.value }"
      >
        <img :src="item.img" :style="{ width: iconWidth }" :alt="item.img" />
        <span>{{ item.name }}</span>
        <i
          class="icon-checked text-dark right-3 absolute"
          v-if="item.value === locale"
        ></i>
        <span
          v-if="ind !== languageList.length - 1"
          class="absolute w-full left-4 right-0 h-px block bottom-0 bg-[#E5EAEE]"
        />
      </div>
    </li>
  </CommonDropdown>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

import CommonDropdown from "./Dropdown.vue";

interface Props {
  iconWidth: string;
  onlyIcon: boolean;
}

defineProps<Props>();

const locale = ref();

const languageList = ref([
  {
    value: "uz",
    name: "O'zbekcha",
    img: "https://www.worldometers.info/img/flags/small/tn_uz-flag.gif",
  },
  {
    value: "ru",
    name: "Русский",
    img: "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif",
  },
  {
    value: "en",
    name: "English",
    img: "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
  },
]);

const activeLanguage = ref({
  value: "ru",
  name: "Русский",
  img: "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif",
});
const dropDownActive = ref(false);

const changeLanguage = (item: { value: string; name: string }) => {
  localStorage.setItem("locale", item.value);
  dropDownActive.value = false;
  if (activeLanguage.value.value !== item.value) {
    window.location.reload();
  }
};

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "ru";

  activeLanguage.value =
    languageList.value.find((language) => language.value === locale.value) ||
    languageList.value[0];
});
</script>
