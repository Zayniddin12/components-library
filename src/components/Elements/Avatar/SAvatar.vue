<template>
  <div>
    <p class="font-semibold text-2xl text-black">Default Avatar</p>
    <div class="flex items-center gap-4 mt-3">
      <img
        class="w-10 h-10 rounded-full object-cover"
        :src="img"
        alt="rounded"
      />
      <img class="w-10 h-10 rounded object-cover" :src="img" alt="default" />
    </div>
    <p class="font-semibold text-2xl text-black mt-3">Bordered Avatar</p>
    <div class="flex items-center gap-4 mt-3">
      <img
        class="w-10 h-10 p-0.5 rounded-full ring-2 object-cover"
        :class="['ring-' + ringColor]"
        :src="img"
        alt="rounded"
      />
    </div>
    <p class="font-semibold text-2xl text-black mt-3">
      Avatar with status indicator
    </p>
    <div class="mt-3 flex items-center gap-4">
      <div class="relative">
        <img
          class="w-10 h-10 rounded-full object-cover"
          :src="img"
          alt="indicator"
        />
        <span
          class="absolute bottom-0 left-7 w-3.5 h-3.5 bg-[#22C55E] border-2 border-white rounded-full"
        ></span>
      </div>
      <div class="relative">
        <img
          class="w-10 h-10 rounded-full object-cover"
          :src="img"
          alt="indicator"
        />
        <span
          class="absolute bottom-0 left-7 w-3.5 h-3.5 bg-[#3B82F6] border-2 border-white rounded-full"
        ></span>
      </div>
      <div class="relative">
        <img
          class="w-10 h-10 rounded-full object-cover"
          :src="img"
          alt="indicator"
        />
        <span
          class="absolute bottom-0 left-7 w-3.5 h-3.5 bg-[#EAB308] border-2 border-white rounded-full"
        ></span>
      </div>
    </div>

    <p class="font-semibold text-2xl text-black mt-3">Avatar with text</p>
    <div class="flex items-center space-x-4 mt-3">
      <img class="w-10 h-10 rounded-full object-cover" :src="img" alt="user" />
      <div class="font-medium">
        <p>{{ userName }}</p>
        <p class="text-sm text-gray-500">Joined in February 2023</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img?: string;
  ringColor?: string;
  userName?: string;
}

// ******* PROPS *******
const props = withDefaults(defineProps<Props>(), {
  img: "/images/no-img.jpg",
  ringColor: "",
  userName: "John Doe",
});
</script>
