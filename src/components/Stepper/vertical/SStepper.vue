<template>
  <div class="flex items-center justify-between w-full">
    <!--    <StepperItem-->
    <!--      v-for="step in steps"-->
    <!--      :key="step"-->
    <!--      class="w-full"-->
    <!--      v-bind="{-->
    <!--        step,-->
    <!--      }"-->
    <!--      :active="active"-->
    <!--    />-->
  </div>
</template>

<script setup lang="ts">
interface Props {
  steps?: {
    title: string;
    id: number;
  }[];
  active?: number;
}

withDefaults(defineProps<Props>(), {});
</script>
