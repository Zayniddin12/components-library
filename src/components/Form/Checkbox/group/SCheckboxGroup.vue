<template>
  <slot>
    <div v-if="items && Object.keys(items).length > 0" :class="wrapperClass">
      <KCheckbox
        v-for="(item, index) in items"
        :key="index"
        :label="item[labelKey]"
        :value="item[valueKey]"
        :name="name"
        @update:modelValue="onUpdate"
      />
    </div>
  </slot>
</template>

<script setup lang="ts">
import { ref } from "vue";

import KCheckbox from "../SCheckbox.vue";

interface Props {
  modelValue: string | number | object;
  items: object;
  labelKey?: string;
  valueKey?: string;
  wrapperClass?: string;
  name?: string;
}

withDefaults(defineProps<Props>(), {
  wrapperClass: "flex flex-wrap gap-4",
  labelKey: "name",
  valueKey: "id",
  name: `k-checkbox-${Math.floor(Math.random() * 1000)}`,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | object): void;
}>();

const value = ref<Array<string | number | object>>([]);
const onUpdate = (e: string | number) => {
  const newValue: (number | string | object)[] = [...value.value];
  if (newValue.includes(e)) {
    newValue.splice(newValue.indexOf(e), 1);
  } else {
    newValue.push(e);
  }
  value.value = newValue;
  emit("update:modelValue", newValue);
};
</script>
