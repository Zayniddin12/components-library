import { Story } from "@storybook/vue3";

import SCollapseTransition from "./SCollapseTransition.vue";

export default {
    components: SCollapseTransition,
    title: "Components/CollapseTransition",
};

const Template: Story = (args) => ({
    components: {
        SCollapseTransition,
    },
    setup() {
        return { args };
    },
    template: `
    <div class="bg-white p-4 space-y-5">
      <SCollapseTransition v-bind="args"  />
    </div>
  `,
});

export const Collapse = Template.bind({});
Collapse.args = {
    title: 'hello hello'
};
