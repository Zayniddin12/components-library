<template>
  <div
    class="i-counter h-11 grid grid-cols-[44px_1fr_44px] gap-2 w-[184px] rounded-xl d-grid gap-2 align-items-center"
  >
    <button
      @click="decrease"
      class="i-counter__btn"
      :disabled="disableDecrease"
    >
      <!-- Change the icon -->
      <span class="text-2xl"> &lsaquo; </span>
    </button>
    <div :class="{ readonly }" class="h-100">
      <input
        type="text"
        :readonly="readonly"
        v-model="count"
        v-maska="inputMask"
        :min="min"
        :max="max"
        class="i-counter__value d-flex h-full align-items-center justify-content-center fw-bold fs-4 text-i-primary"
        :class="{ error }"
        @input="onChangeCount"
      />
    </div>
    <button
      @click="increase"
      class="i-counter__btn"
      :disabled="disableIncrease"
    >
      <!-- Change the icon -->
      <span class="text-2xl"> &rsaquo; </span>
    </button>
  </div>
</template>

<script setup lang="ts">
// ******* PROPS *******
import { ref, watch } from "vue";

interface Props {
  defaultCount?: number;
  disableIncrease?: boolean;
  disableDecrease?: boolean;
  error?: boolean;
  readonly?: boolean;
  residentValidation?: boolean;
  inputMask?: string;
  max?: number;
  min?: number;
}
const props = withDefaults(defineProps<Props>(), {
  defaultCount: 0,
  min: 0,
  max: 999,
  inputMask: "###",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "decrease"): void;
}>();

const count = ref(0);

watch(
  () => props.defaultCount,
  (newValue) => {
    if (newValue) {
      count.value = newValue;
    }
  },
  { immediate: true }
);

watch(
  () => count.value,
  () => {
    if (count.value < props.min) {
      count.value = props.min;
    }
    if (count.value > props.max) {
      count.value = props.max;
    }
    emit("update:modelValue", count.value);
  },
  { immediate: true, deep: true }
);

const decrease = () => {
  if (
    count.value > 0 &&
    !props.disableDecrease &&
    ((props.residentValidation && count.value - 1 >= props.defaultCount) ||
      !props.residentValidation)
  ) {
    emit("decrease");
    count.value--;
  }
};
const increase = () => {
  if (!props.disableIncrease) {
    count.value++;
  }
};
const onChangeCount = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;

  if (target?.value.includes("-") || event.data?.includes("-")) {
    return event.preventDefault();
  }
};

watch(
  () => count.value,
  () => {
    if (count.value < props.min) {
      count.value = props.min;
    }
    if (count.value > props.max) {
      count.value = props.max;
    }
  },

  { deep: true, immediate: true }
);
</script>

<style scoped>
.i-counter__btn {
  @apply bg-[#7DBA2833] rounded-lg w-11 h-full border-none;
}
.i-counter__btn:nth-of-type(2):disabled {
  @apply bg-[#7D867D33] cursor-not-allowed;
}
.i-counter__btn:nth-of-type(2):disabled .i-counter__btn-icon {
  @apply bg-[#7d867d];
}
.i-counter__btn-icon {
  @apply bg-[#7dba28] rounded-full;
}
.i-counter__value {
  @apply bg-[#f7faf8] border-none rounded-lg w-full h-full text-center focus:border-none focus:outline-none;
}
.error {
  @apply border border-solid border-[#fd5757];
}
.readonly {
  @apply relative before:w-full before:h-full before:bg-transparent before:z-10 before:absolute before:top-0 before:left-0;
}
</style>
