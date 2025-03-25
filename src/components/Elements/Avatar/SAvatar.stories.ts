import { Story } from "@storybook/vue3";

import SAvatar from "./SAvatar.vue";

export default {
  components: SAvatar,
  title: "Components/Elements/Avatar",
};

const Template: Story = (args) => ({
  components: {
    SAvatar,
  },
  setup() {
    return { args };
  },
  template: `
    <div>
      <SAvatar v-bind="args" />
    </div>
  `,
});

export const Avatar = Template.bind({});
Avatar.args = {
  img: '/images/profile.jpg',
  ringColor: 'gray-300',
  userName: 'Thom Riddle'
};
