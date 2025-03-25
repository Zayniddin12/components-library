import { Story } from "@storybook/vue3";

import SBadge from "./SBadge.vue";

export default {
  components: SBadge,
  title: "Components/Elements/Badge",
};

const Template: Story = (args) => ({
  components: {
    SBadge,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <SBadge v-bind="args" />
    </div>
  `,
});

export const Sbadge = Template.bind({});
Sbadge.args = {
  text: "custom",
  textStyle: "",
  count: 20
};
