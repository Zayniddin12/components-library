import { Story } from "@storybook/vue3";

import SInstagramSlider, { Props } from "./SInstagramSlider.vue";

export default {
  title: "Components/Sliders/InstagramSlider",
  component: SInstagramSlider,
};

const Template: Story<Props> = (args) => ({
  components: { SInstagramSlider },

  setup() {
    return { args };
  },
  template: `<SInstagramSlider v-bind="args" />`,
});

export const InstagramSlider = Template.bind({});
InstagramSlider.args = {
  slides: [
    {
      get_img: "https://picsum.photos/200/200",
      link: "https://instagram.com",
    },
    {
      get_img: "https://picsum.photos/200/201",
      link: "https://instagram.com",
    },
    {
      get_img: "https://picsum.photos/201/200",
      link: "https://instagram.com",
    },
    {
      get_img: "https://picsum.photos/202/201",
      link: "https://instagram.com",
    },
    {
      get_img: "https://picsum.photos/201/202",
      link: "https://instagram.com",
    },
    {
      get_img: "https://picsum.photos/202/202",
      link: "https://instagram.com",
    },
  ],
};
