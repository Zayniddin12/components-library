import { Story } from "@storybook/vue3";

import SRateStar from "./SRateStar.vue";

export default {
  components: SRateStar,
  title: "Components/Rate/Star",
};

const Template: Story = (args) => ({
  components: {
    SRateStar,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
    <pre>{{args}}</pre>
      <SRateStar v-bind="args"  />
    </div>
  `,
});

export const Star = Template.bind({});
Star.args = {
  rating: 4.5,
};
