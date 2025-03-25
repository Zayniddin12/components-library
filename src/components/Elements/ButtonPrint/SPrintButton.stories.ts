import { Story } from "@storybook/vue3";

import SPrintButton from "./PrintButton.vue";

export default {
  title: "Components/Elements",
  component: SPrintButton,
};

const Template: Story = (args) => ({
  components: { SPrintButton },
  setup() {
    return { args };
  },
  template: `<div class="m-12">
  <SPrintButton />
  </div>
  `,
});

export const PrintButton = Template.bind({});
PrintButton.args = {
  title: "Print",
};
