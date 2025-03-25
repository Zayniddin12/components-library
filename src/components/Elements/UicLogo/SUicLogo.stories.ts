import { Story } from "@storybook/vue3";

import SUicLogoDoc from "./SUicLogo.mdx";
import SUicLogo from "./SUicLogo.vue";

export default {
  title: "Components/Elements",
  component: SUicLogo,
  parameters: {
    docs: {
      page: SUicLogoDoc,
    },
  },
};

const Template: Story = (args) => ({
  components: { SUicLogo },
  setup() {
    return { args };
  },
  template: ` 
    <SUicLogo />
    <SUicLogo main-color="#ca8a04" secondary-color="#fbbf24" />
  `,
});

export const UicLogo = Template.bind({});
UicLogo.args = {};
