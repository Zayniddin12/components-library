import { Story } from "@storybook/vue3";

import STextAvatar from "./STextAvatar.vue";

export default {
    components: STextAvatar,
    title: "Components/Elements/Avatar",
};

const Template: Story = (args) => ({
    components: {
        STextAvatar,
    },
    setup() {
        return { args };
    },
    template: `
    <div>
      <STextAvatar v-bind="args" />
    </div>
  `,
});

export const TextAvatar = Template.bind({});
TextAvatar.args = {
    avaText: 'Status'
};
