import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SRadioDoc from "./SRadio.mdx";
import SRadio, { Props } from "./SRadio.vue";

export default {
  title: "Components/Form/Radio",
  component: SRadio,
  parameters: {
    docs: {
      page: SRadioDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SRadio },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `
    <div class="rounded bg-white p-5">
      <SRadio v-model="value" v-bind="args" />
    </div>
    `,
});

const DisabledTemplate: Story<Props> = (args) => ({
  components: { SRadio },
  setup() {
    const value = ref(false);
    const valueChecked = ref(true);
    return { args, value, valueChecked };
  },
  template: `
    <div class="rounded bg-white p-5 flex space-x-5">
      <SRadio v-model="value" v-bind="args.unchecked" />
      <SRadio v-model="valueChecked" v-bind="args.checked" />
    </div>
    `,
});

export const BaseRadio = Template.bind({});
BaseRadio.args = { label: "Radio" };

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  unchecked: { label: "Disabled", disabled: true },
  checked: { label: "Disabled", value: true, disabled: true },
};
