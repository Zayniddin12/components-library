import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SCopyLink from "./SCopyLink.vue";

export default {
  title: "Components/Elements",
  component: SCopyLink,
};

const Template: Story = (args) => ({
  components: { SCopyLink },
  setup() {
    const show = ref(false);
    return { args, show };
  },
  template: `<div class="m-12">
  <SCopyLink :show="show" @click="show = !show" />
  </div>
  `,
});

export const CopyButton = Template.bind({});
CopyButton.args = {
  copy_text: "Copy site url",
  copy_tooltip: "copied",
};
