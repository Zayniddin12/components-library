import { Story } from "@storybook/vue3";

import SCircleCounter from "./SCircleCounter.vue";

export default {
  title: "Components/Counter/CircleCounter",
  component: SCircleCounter,
};

const Template: Story = (args) => ({
  components: { SCircleCounter },

  setup() {
    return { args };
  },
  template:
    '<div class="flex items-center justify-center bg-white w-full h-screen"><SCircleCounter v-bind="args"  /></div>',
});

export const CircleCounter = Template.bind({});
CircleCounter.args = {
  digits: 60,
};
