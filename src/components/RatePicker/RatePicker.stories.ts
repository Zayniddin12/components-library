import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SRatePicker from "./RatePicker.vue";

export default {
  components: SRatePicker,
  title: "Components/Rate/Picker",
};

const Template: Story = (args) => ({
  components: {
    SRatePicker,
  },
  setup() {
    const rate = ref(0);
    return { args, rate };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
    <pre>Rate: {{rate}}</pre>
      <SRatePicker v-model="rate" v-bind="args"  />
    </div>
  `,
});

export const Picker = Template.bind({});
