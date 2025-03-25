import { Story } from "@storybook/vue3";
import { ref } from "vue";

import KCheckbox, { Props } from "./SCheckbox.vue";

export default {
  title: "Components/Form/Checkbox",
  component: KCheckbox,
};

const Template: Story<Props> = (args) => ({
  components: { KCheckbox },
  setup() {
    const value = ref(false);
    return { args, value };
  },
  template: `
    <div class="rounded bg-white p-5">
      <KCheckbox v-model="value" v-bind="args" />
    </div>
    `,
});

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  label: "Select",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: "Label",
};
