import { Story } from "@storybook/vue3";

import SMapDoc from "./SRepublicMap.mdx";
import SMap, { Props } from "./SRepublicMap.vue";

export default {
  title: "Components/Elements/ Republic Map",
  component: SMap,
  parameters: {
    docs: {
      page: SMapDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SMap },
  setup() {
    return { args };
  },
  template: `<SMap v-bind="args"/>`,
});
export const Map = Template.bind({});
Map.args = {
  defaultId: 1,
};
