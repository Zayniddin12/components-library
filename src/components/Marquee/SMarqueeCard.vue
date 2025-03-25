<template>
  <BlockPreloader
    width="100%"
    height="136px"
    border-radius="16px"
    :loading="loading"
  >
    <nuxt-link
      :to="`/products?manufacturers=${brand?.id}`"
      class="cursor-pointer duration-300 bg-[#f3f3f3] p-4 rounded-2xl h-[112px] w-[234px] flex justify-center items-center group inline-block"
    >
      <img
        :src="brand?.icon"
        :alt="brand?.title"
        class="grayscale duration-300 group-hover:scale-105 group-hover:grayscale-0 max-h-[62px] max-w-[200px] mx-auto object-contain"
      />
    </nuxt-link>
  </BlockPreloader>
</template>

<script lang="ts" setup>
interface TBrand {
  icon: string;
  id: number;
  override_price: string;
  title: string;
  warehouse: number;
  height: string;
  width: string;
}

interface Props {
  brand?: TBrand;
  loading?: boolean;
  isGray?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  isGray: false,
});
</script>

<style lang="scss" scoped></style>
