import { Story } from "@storybook/vue3";

import LHeader, { Props } from "./LHeader.vue";

export default {
  title: "Layout/Header",
  component: LHeader,
};

const Template: Story<Props> = (args) => ({
  components: { LHeader },

  setup() {
    return { args };
  },
  template: ` 
        <LHeader v-bind="args" />
   `,
});

export const Header = Template.bind({});
Header.args = {
  links: [
    {
      title: "Dashboard",
      to: "/",
    },
    {
      title: "Pages",
      to: "/pages",
    },
    {
      title: "Apps",
      to: "/apps",
    },
    {
      title: "Layouts",
      to: "/layouts",
    },
    {
      title: "Help",
      to: "/help",
    },
  ],
  profileItems: [
    {
      title: "Profile",
      event: "on-profile",
      icon: "icon-user",
    },
    {
      title: "Logout",
      event: "on-logout",
      icon: "icon-log-out",
      class: "!text-red-500 hover:!bg-red-50",
    },
  ],
  activeRoute: "/",
  user: {
    avatar:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg",
    fullName: "Raupov Manuchehr",
    subtitle: "Developer",
  },
};
