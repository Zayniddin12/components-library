<template>
  <div
    class="pl-3 hover:bg-[#d5d5d545] transform duration-300 min-w-[245px]"
    @click.stop="$emit('on-handle')"
  >
    <div
      class="py-4 border-b border-solid border-[#F3F5F8] flex items-center gap-2.5"
      :class="{ 'border-t border-solid border-[#F3F5F8]': index !== 0 }"
    >
      <SIcon
        :icon="item.icon"
        :class="item.icon === 'icon-delete-3' ? 'text-red-900' : ''"
      />
      <p class="text-blue-900 text-sm font-normal">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SIcon from "@/components/Icon/SIcon.vue";

interface Props {
  item: {
    icon: string;
    name: string;
  };
  index: number;
}

withDefaults(defineProps<Props>(), {});
</script>
