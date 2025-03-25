import { Story } from "@storybook/vue3";

import SAppLink from "./SAppLink.vue";

export default {
  components: SAppLink,
  title: "Components/Elements/App store icons",
};

const Template: Story = (args) => ({
  components: {
    SAppLink,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <SAppLink v-bind="args"  />
    </div>
  `,
});

export const AppStore = Template.bind({});
AppStore.args = {
  link: "https://apple.com",
  provider: "apple",
};
export const GooglePlay = Template.bind({});
GooglePlay.args = {
  link: "https://google.com",
  provider: "google",
};
