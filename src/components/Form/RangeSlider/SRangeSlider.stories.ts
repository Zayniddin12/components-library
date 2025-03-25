import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SRadioDoc from "./SRangeSlider.mdx";
import SRangeSlider, { Props } from "./SRangeSlider.vue";

export default {
  title: "Components/Form/RangeSlider",
  component: SRangeSlider,
  parameters: {
    docs: {
      page: SRadioDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SRangeSlider },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `
    <div class="rounded bg-white p-5">
      <SRangeSlider v-model="value" v-bind="args" />
      <pre>v-model: {{ value }}</pre>
    </div>
    `,
});

export const RangeSlider = Template.bind({});
RangeSlider.args = { label: "Radio" };
