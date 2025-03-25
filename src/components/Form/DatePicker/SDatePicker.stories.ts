import { Story } from "@storybook/vue3";
import { ref } from "vue";

import Docs from "./SDatePicker.mdx";
import SDatePicker from "./SDatePicker.vue";

export default {
  components: SDatePicker,
  title: "Components/Form/DatePicker",
  parameters: {
    docs: {
      page: Docs,
    },
  },
};

const Template: Story = (args) => ({
  components: {
    SDatePicker,
  },
  setup() {
    const date = ref();
    return { args, date };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
    <pre>date: {{date}}</pre>
      <SDatePicker v-model="date" v-bind="args"  />
    </div>
  `,
});

export const DatePicker = Template.bind({});
