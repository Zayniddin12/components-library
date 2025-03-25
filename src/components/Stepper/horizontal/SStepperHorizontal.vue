<template>
  <div
    class="custom-stepper relative z-10 min-w-[250px] w-full overflow-x-scroll md:overflow-x-auto inline-flex items-center pb-6 md:pr-6"
  >
    <div
      v-for="(item, index) in steps"
      :key="index"
      class="flex-shrink-0 flex flex-row items-center justify-center list-step select-none"
    >
      <div
        class="flex items-center w-full"
        :class="[checkStepActive(item?.check), stepStyle]"
      >
        <div
          class="flex items-center justify-center w-6 h-6 flex-shrink-0 !text-inherit transition duration-300"
        >
          <template v-if="stepType === 'icon'">
            <span
              :class="[
                item?.check < modelValue
                  ? `${checkIconActive(item?.check)} !text-base`
                  : item?.icon,
              ]"
              class="text-xl leading-8 flex-shrink-0"
            ></span>
          </template>
          <template v-if="stepType === 'number'">
            <span
              class="text-xl leading-8 flex-shrink-0"
              :class="checkIconActive(item?.check)"
            >
              {{ item.check }}
            </span>
          </template>
        </div>
        <div class="text-center">
          <p
            class="text-sm md:text-base font-bold"
            :class="checkTitleActive(item?.check)"
            v-if="item?.title"
          >
            {{ item?.title }}
          </p>
        </div>
      </div>
      <div
        class="w-8 h-0.5 my-3 colored-line"
        :class="[
          item?.check + 1 === modelValue
            ? stepLineCurrentColor
            : item?.check < modelValue
            ? stepLineCheckedColor
            : stepLineColor,
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  modelValue?: number;
  steps: {
    title?: string;
    text?: string;
    icon?: string;
    check?: number;
  }[];
  stepType?: "number" | "icon";
  titleStyle?: string;
  titleCheckedStyle?: string;
  iconStyle?: string;
  iconCheckedStyle?: string;
  stepStyle?: string;
  currentStyle?: string;
  checkedStyle?: string;
  defaultStyle?: string;
  stepLineColor?: string;
  stepLineCheckedColor?: string;
  stepLineCurrentColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 1,
  steps: () => [
    {
      title: "Адрес доставки",
      icon: "icon-phone",
      check: 1,
    },
    {
      title: "Контактные данные",
      icon: "icon-calendar-event",
      check: 2,
    },
    {
      title: "Оплата",
      icon: "icon-credit-card1",
      check: 3,
    },
  ],
  stepStyle:
    "flex items-center space-x-2 rounded-full py-[9.5px] px-8 text-white",
  titleStyle: "text-black",
  titleCheckedStyle: "text-white",
  iconStyle: "text-white",
  iconCheckedStyle: "text-black",
  defaultStyle: "bg-gray-200 text-gray-500",
  currentStyle: "bg-primary text-white",
  checkedStyle: "bg-green text-white",
  stepLineColor: "bg-gray-200",
  stepLineCheckedColor: "bg-green",
  stepLineCurrentColor: "bg-primary",
  stepType: "number",
});

function checkStepActive(target: number) {
  if (target === props.modelValue) {
    return props.currentStyle;
  } else if (props.modelValue > target) {
    return props.checkedStyle;
  } else {
    return props.defaultStyle;
  }
}
function checkTitleActive(target: number) {
  if (target === props.modelValue) {
    return props.titleCheckedStyle;
  } else if (props.modelValue > target) {
    return props.titleStyle;
  }
}
function checkIconActive(target: number) {
  if (target === props.modelValue) {
    return props.iconStyle;
  } else if (props.modelValue > target) {
    return props.iconCheckedStyle;
  }
}
</script>

<style scoped>
.custom-stepper::-webkit-scrollbar {
  width: 3px;
  height: 8px;
  background-color: #f6f7f7;
}

.custom-stepper::-moz-scrollbar {
  height: 1px;
  background-color: #6a7380;
}

.custom-stepper::-ms-scrollbar {
  height: 1px;
  background-color: #6a7380;
}

.custom-stepper::-o-scrollbar {
  height: 1px;
  background-color: #6a7380;
}

.custom-stepper::-webkit-scrollbar-thumb {
  background-color: #6a7380;
  border-radius: 4px;
}

.custom-stepper::-moz-scrollbar-thumb {
  background-color: #6a7380;
  border-radius: 4px;
}

.custom-stepper::-ms-scrollbar-thumb {
  background-color: #6a7380;
  border-radius: 4px;
}

.custom-stepper::-o-scrollbar-thumb {
  background-color: #6a7380;
  border-radius: 4px;
}

.list-step:last-child .colored-line {
  display: none;
}
</style>
