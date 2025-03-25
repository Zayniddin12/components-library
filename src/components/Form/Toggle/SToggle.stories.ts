import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SToggle, { Props } from "./SToggle.vue";

export default {
  title: "Components/Form/Toggle",
  component: SToggle,
};

const Template: Story<Props> = (args) => ({
  components: { SToggle },
  setup() {
    const value = ref(false);
    return { args, value };
  },
  template: `
    <div class="p-6 bg-white rounded-2 border">
      <SToggle v-model="value" v-bind="args" />
      <pre class="mt-2">v-model(checked): {{ value }}</pre>
    </div>
    `,
});

export const Toggle = Template.bind({});
Toggle.args = {
  label: "",
};
