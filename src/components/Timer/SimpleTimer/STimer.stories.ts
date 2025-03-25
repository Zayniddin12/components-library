import { Story } from "@storybook/vue3";

import STimer from "./STimer.vue";

export default {
  components: STimer,
  title: "Components/Timer/SimpleTimer",
};

const Template: Story = (args) => ({
  components: {
    STimer,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <STimer v-bind="args"  />
    </div>
  `,
});

export const SimpleTimer = Template.bind({});
SimpleTimer.args = {
  seconds: 120,
};
