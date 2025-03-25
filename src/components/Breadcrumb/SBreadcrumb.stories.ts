import { Story } from "@storybook/vue3";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SBreadcrumb, { Props } from "./SBreadcrumb.vue";

export default {
  title: "Components/Breadcrumb",
  component: SBreadcrumb,
};

const Template: Story<Props> = (args) => ({
  components: { SBreadcrumb },

  setup() {
    return { args };
  },
  template: `
    <SBreadcrumb v-bind="args" />
   `,
});

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  routes: [
    {
      route: "/company",
      name: "Company",
      target: false,
      link: true,
      disabled: false,
    },
    {
      route: "/company/details",
      name: "Company details",
      target: true,
      link: false,
      disabled: false,
    },
    {
      route: "/company/details/view",
      name: "View",
      target: false,
      link: false,
      disabled: true,
    },
  ],
};
