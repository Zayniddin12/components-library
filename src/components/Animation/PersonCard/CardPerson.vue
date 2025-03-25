<template>
  <div class="container">
    <img
      v-for="(item, idx) in images"
      :key="idx"
      :src="item.img"
      alt="images"
      class="images"
    />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  images?: {
    img: string;
  };
}

defineProps<Props>();
</script>

<style scoped>
.images {
  width: 30%;
  height: 100%;
  object-fit: cover;

  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);

  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
}
.container {
  max-width: 600px;
  max-height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container:hover .images {
  opacity: 0.3;
}
.container .images:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}
</style>
