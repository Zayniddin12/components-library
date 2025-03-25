import { Story } from "@storybook/vue3";

import LanguageSwitcher, { Props } from "./LanguageSwitcher.vue";
import LanguageSwitcherDoc from "./LanguageSwitcherDoc.mdx";

const Template: Story<Props> = (args: Props) => ({
  components: { LanguageSwitcher },

  setup() {
    return { args };
  },
  template: `
        <div>
          <div class="w-fit mx-auto">
            <h2 class="text-4xl font-bold my-7">Language Switcher</h2>
            <LanguageSwitcher v-bind="args" />
          </div>
        </div>
    `,
});

export const LangSwitcher = Template.bind({});
LangSwitcher.args = {
  iconWidth: 1,
};

export default {
  title: "Components/Elements",
  component: LanguageSwitcher,
  parameters: {
    docs: {
      page: LanguageSwitcherDoc,
    },
  },
};
