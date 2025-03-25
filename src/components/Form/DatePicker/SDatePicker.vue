<template>
  <div>
    <v-date-picker
      v-model="date"
      class="w-full"
      v-bind="datePickerConf"
      :class="dpClass"
      input="DD/MM/YYYY"
      :locale="calendarLocale"
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div
          :class="[
            'KInput inline-flex items-center relative k-transition transition-all duration-500 bg-[#F3F5F8] rounded-10 border-2 overflow-hidden w-full h-11',
            error
              ? '!border-red'
              : 'border-transparent focus-within:border-green',
          ]"
        >
          <input
            class="text-grey-400 text-base placeholder:text-grey-100 bg-transparent flex-grow py-3 px-4"
            :class="inputClass"
            :value="inputValue"
            v-on="inputEvents"
            v-maska="inputMask"
            :placeholder="placeholder"
          />
          <div
            class="absolute flex-y-center top-1/2 right-[6px] -translate-y-1/2 p-[6px] pointer-events-none"
          >
            <slot name="suffix"></slot>
          </div>
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script setup lang="ts">
import "dayjs/locale/uz-latn";
import "dayjs/locale/ru";
import "v-calendar/dist/style.css";

import dayjs from "dayjs";
import { computed, ref, unref, watch } from "vue";

// import { useI18n } from "vue-i18n";

// const { locale } = useI18n();
const calendarLocale = computed(() =>
  props.locale === "uz" ? "uz-latn" : props.locale
);

interface Props {
  modelValue?: string;
  error?: boolean;
  placeholder?: string;
  datePickerConf?: object;
  inputMask?: string;
  dpClass?: string | string[];
  inputClass?: string | string[];
  // Remove locale if you have i18n
  locale?: string;
}
const props = withDefaults(defineProps<Props>(), { locale: "en" });

const date = ref(unref(props.modelValue || ""));

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
  (e: "change", value: string): void;
}>();

watch(date, () => {
  emit("change", date.value);
  emit("update:modelValue", dayjs(date.value).format("YYYY-MM-DD"));
});
</script>
