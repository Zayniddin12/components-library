import { Story } from "@storybook/vue3";

// import TimelineDoc from "./Timeline.mdx";
import STabsGroup from "./STabsGroup.vue";

const Template: Story = (args) => ({
  components: { STabsGroup },

  setup() {
    return { args };
  },
  template: `
    <div>
      <div>
        <h2 class="text-4xl font-bold my-7">Tabs</h2>
        <STabsGroup v-bind="args" />
      </div>
    </div>
  `,
});

export const TabsGroup = Template.bind({});
TabsGroup.args = {
  list: [
    {
      label: "tab 1",
      value: "courses",
    },
    {
      label: "tab 2",
      value: "books",
    },
  ],
};

export default {
  title: "Components/Tabs/Group",
  component: STabsGroup,
  // parameters: {
  //   docs: {
  //     page: TimelineDoc,
  //   },
  // },
};
