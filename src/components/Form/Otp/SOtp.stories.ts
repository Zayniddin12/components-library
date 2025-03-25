import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SOtp from "./SOtp.vue";

export default {
  title: "Components/Form/Otp",
  component: SOtp,
};

const Template: Story = (args) => ({
  components: {
    SOtp,
  },
  setup() {
    const otp = ref();
    return { args, otp };
  },
  template: `
    <div class="bg-white p-4">
      <SOtp v-bind="args" v-model="otp" />
      v-model: {{ otp }}
    </div>
  `,
});

export const OtpInput = Template.bind({});
OtpInput.args = {
  context: {
    digits: 6,
    node: {
      input(i: number) {
        return i;
      },
    },
    classes: {
      digit: "w-11 h-11 rounded-xl py-2.5 px-4 border border-dark",
    },
  },
};
