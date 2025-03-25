<template>
  <div
    class="pt-8 relative w-1/2"
    :class="[
      position === 'right' ? 'pr-8' : 'pl-8',
      { 'pointer-events-none opacity-50': !active },
    ]"
  >
    <div class="p-4 bg-[#191C1C] rounded-lg">
      <div
        class="flex-y-center gap-1 px-2 py-1 rounded inline"
        :class="customColor"
      >
        <span class="text-white text-xs leading-130 font-medium">{{
          name
        }}</span>
      </div>
      <p class="mt-3 text-white leading-[136%] text-sm">
        {{ description }}
      </p>
    </div>
    <div
      v-if="active"
      class="w-[2px] h-full absolute top-0 bg-[#22B3C7]"
      :class="[
        position === 'right' ? 'right-[-2px]' : 'left-[0]',
        { 'h-1/2': active },
        { '!h-full': height },
      ]"
    ></div>
    <div
      v-if="active"
      class="absolute top-[46%] blur__shadow"
      :class="position === 'right' ? 'right-[-7px]' : 'left-[-5px]'"
    ></div>
    <div
      v-if="active"
      :class="position === 'right' ? 'right-[-7px]' : 'left-[-5px]'"
      class="absolute top-[46%] bg-black border-[2px] border-solid border-[#22B3C7] w-3 h-3 rounded-full"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  id?: string;
  position: string;
  active: boolean;
  height: boolean;
  description: string;
  name: string;
  image?: string;
}

const props = withDefaults(defineProps<Props>(), {});

const customColor = computed(() => {
  if (props.id === "application_sent") {
    return "bg-white bg-opacity-50";
  } else if (props.id === "application_moderating") {
    return "bg-[#FFA800]";
  } else if (props.id === "application_accepted") {
    return "bg-[#22B3C7]";
  } else {
    return "bg-[#1ACE91]";
  }
});
</script>
<style scoped>
.blur__shadow {
  width: 12px;
  height: 12px;
  background: #3de6fd;
  filter: blur(22px);
}
</style>
