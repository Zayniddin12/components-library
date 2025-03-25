import { Story } from "@storybook/vue3";

import SVideoPlayer from "./SVideoPlayer.vue";

export default {
  title: "Components/Player",
  component: SVideoPlayer,
};

const Template: Story = (args) => ({
  components: {
    SVideoPlayer,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4">
      <SVideoPlayer v-bind="args" />
    </div>
  `,
});

export const VideoPlayer = Template.bind({});
VideoPlayer.args = {};
