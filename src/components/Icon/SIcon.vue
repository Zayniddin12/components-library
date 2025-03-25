<template>
  <span v-if="icon.includes('colored')" :class="icon">
    <span v-for="item in 6" :key="item" :class="`path${item}`"></span>
  </span>
  <i v-else :class="icon" class="text-lg" />
</template>

<script lang="ts" setup>
interface Props {
  icon: string;
}

withDefaults(defineProps<Props>(), {
  icon: "icon-money",
});
</script>

<style>
@import "./assets/style.css";
</style>
