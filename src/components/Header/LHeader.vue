<template>
  <header class="w-full bg-white py-4 px-5 z-10">
    <nav class="flex w-full h-full items-center gap-5 justify-end">
      <slot name="before-links"></slot>
      <ul class="flex gap-x-2">
        <li v-for="(link, index) in links" :key="index">
          <a
            :href="link.to"
            class="text-slate-700 px-3 py-2 inline-block text-sm transition-all duration-200 hover:bg-gray-200 rounded-md"
            :class="{
              'bg-gray-200 !text-blue-500': link.to === activeRoute,
            }"
            >{{ link.title }}</a
          >
        </li>
      </ul>
      <slot name="after-links"></slot>
      <div class="relative group px-2 py-1 min-w-[120px]">
        <div class="flex items-center gap-3">
          <img
            :src="user?.avatar"
            alt="Profil image"
            class="w-11 h-11 rounded-full object-cover"
          />
          <div class="h-max flex flex-col justify-center">
            <p class="text-sm font-medium text-gray-800">
              {{ user?.fullName }}
            </p>
            <p class="text-xs text-gray-500">{{ user?.subtitle }}</p>
          </div>
        </div>
        <div
          class="absolute w-full bg-white py-2 rounded-md -bottom-2 translate-y-full overflow-hidden shadow-xl right-0 w-full text-slate-500 opacity-0 invisible duration-200 transition-all group-hover:!opacity-100 group-hover:!visible group-hover:!bottom-0"
        >
          <div
            v-for="(item, index) in profileItems"
            :key="index"
            @click="$emit(item?.event)"
            class="text-sm w-full transition-all duration-300 hover:bg-gray-200 px-4 py-3 cursor-pointer"
            :class="[
              item?.class,
              item?.icon
                ? '!inline-grid grid-cols-[28px_1fr] items-center'
                : 'inline-block',
            ]"
          >
            <i v-if="item?.icon" :class="item?.icon" class="text-xl"></i>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
interface Props {
  links: {
    title: string;
    to: string;
  }[];
  profileItems?: {
    title: string;
    class?: string;
    icon?: string;
    event?: string;
  }[];
  activeRoute?: string;
  user?: {
    fullName: string;
    avatar: string;
    subtitle: string;
  };
}

defineProps<Props>();
</script>
