import { Story } from "@storybook/vue3";

import TimelineDoc from "./Timeline.mdx";
import STimeline from "./Timeline.vue";

const Template: Story = (args) => ({
  components: { STimeline },

  setup() {
    return { args };
  },
  template: `
    <div>
      <div>
        <h2 class="text-4xl font-bold my-7">Timeline</h2>
        <STimeline v-bind="args" />
      </div>
    </div>
  `,
});

export const Timeline = Template.bind({});
Timeline.args = {
  step: 2,
};

export default {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    docs: {
      page: TimelineDoc,
    },
  },
};
