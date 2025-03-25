<template>
  <div class="flex items-center">
    <div
      v-for="(route, index) in routes"
      :key="index"
      class="flex items-center flex-wrap"
      :class="[checkLastRoute(index), `text-[${textColor}]`]"
    >
      <a
        v-if="route.link"
        class="transition duration-500"
        :class="[`hover:text-[${hoverColor}]`]"
        :href="route.route"
      >
        {{ route.name }}
      </a>
      <p v-else-if="route.disabled">{{ route.name }}</p>
      <router-link
        v-else
        class="transition duration-500"
        :class="[`hover:text-[${hoverColor}]`]"
        :to="route.route"
      >
        {{ route.name }}
      </router-link>
      <span v-if="index !== routes.length - 1" class="mx-2">/</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IRoute {
  name: string;
  route: string;
  target?: boolean;
  link?: boolean;
  disabled?: boolean;
}

export interface Props {
  routes: IRoute[];
  hoverColor: string;
  textColor: string;
}
const props = withDefaults(defineProps<Props>(), {
  hoverColor: "#409eff",
  textColor: "#1c1e21",
});
const checkLastRoute = (index: number) => {
  if (index === props.routes.length - 1) {
    return "font-normal cursor-not-allowed";
  } else {
    return "font-bold cursor-pointer";
  }
};
</script>
