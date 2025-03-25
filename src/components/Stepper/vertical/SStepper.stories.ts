import { Story } from "@storybook/vue3";
import { ref } from "vue";

// import StepperDoc from "./SStepper.mdx";
import SStepper, { Props } from "./SStepper.vue";

export default {
  title: "Components/Stepper/Vertical",
  component: SStepper,
  // parameters: {
  //   docs: {
  //     page: StepperDoc,
  //   },
  // },
};

const Template: Story<Props> = (args) => ({
  components: { SStepper },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `
      <SStepper v-bind="args" />
    `,
});

export const Stepper = Template.bind({});
Stepper.args = {
  steps: [
    {
      id: 1,
      name: "Name 1",
    },
    {
      id: 2,
      name: "Name 2",
    },
    {
      id: 3,
      name: "Name 3",
    },
  ],
  active: 2,
};
