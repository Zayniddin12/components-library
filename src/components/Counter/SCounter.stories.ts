import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SCounter from "./SCounter.vue";

export default {
  title: "Components/Counter",
  component: SCounter,
};

const Template: Story = (args) => ({
  components: {
    SCounter,
  },
  setup() {
    const count = ref(0);
    return { args, count };
  },
  template: `
    <div class="bg-white p-4">
    <p class="mb-4">Count: {{ count }}</p>
      <SCounter v-bind="args" v-model="count" />
    </div>
  `,
});

export const Counter = Template.bind({});
Counter.args = {};
