import { Story } from "@storybook/vue3";

import BlockPreloaderDoc from "./BlockPreloader.mdx";
import BlockPreloader, { Props } from "./BlockPreloader.vue";

const Template: Story<Props> = (args: Props) => ({
  components: { BlockPreloader },

  setup() {
    return { args };
  },
  template: `
        <div>
          <div>
            <h2 class="text-4xl font-bold my-7">Skeleton</h2>
            <BlockPreloader v-bind="args" />
          </div>
        </div>
    `,
});

export const BlockLoader = Template.bind({});
BlockLoader.args = {
  width: "200px",
  height: "200px",
  loading: true,
};

export default {
  title: "Components/BlockPreloader",
  component: BlockPreloader,
  parameters: {
    docs: {
      page: BlockPreloaderDoc,
    },
  },
};
