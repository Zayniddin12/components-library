import { Story } from "@storybook/vue3";

import SStepperHorizontal, { Props } from "./SStepperHorizontal.vue";

export default {
  title: "Components/Stepper/Horizontal/Horizontal",
  component: SStepperHorizontal,
  argTypes: {
    stepType: {
      options: ["number", "icon"],
      control: { type: "radio" },
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SStepperHorizontal },
  setup() {
    return { args };
  },
  template: `<SStepperHorizontal 
      v-bind="args"
  />`,
});
export const Horizontal = Template.bind({});
Horizontal.args = {
  modelValue: 1,
  steps: [
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
  titleStyle: "text-black",
  titleCheckedStyle: "text-white",
  stepStyle: "flex items-center space-x-2 rounded-full py-[9.5px] px-8",
  defaultStyle: "bg-gray-200 text-gray-500",
  currentStyle: "bg-primary text-white",
  checkedStyle: "bg-green text-white",
  stepLineColor: "bg-gray-200",
  stepLineCheckedColor: "bg-green",
  stepLineCurrentColor: "bg-primary",
  stepType: "number",
};
