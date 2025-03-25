import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SLightbox from "./SLightbox.vue";

export default {
  components: SLightbox,
  title: "Components/Lightbox",
};

const Template: Story = (args) => ({
  components: {
    SLightbox,
  },
  setup() {
    const show = ref(false);
    const open = () => {
      show.value = true;
    };
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <button class="" @click="open"> Open Lightbox </button>
      <SLightbox v-bind="args"/>
    </div>
  `,
});

export const SimpleLightbox = Template.bind({});
SimpleLightbox.args = {
  images: [
    {
      id: 1,
      title: "Brand 1",
      default:
        "https://toshkent-parfum.uicgroup.tech/media/manufacturers/saint.svg",
    },
    {
      id: 2,
      title: "Brand 2",
      default:
        "http://toshkent-parfum.uicgroup.tech/media/manufacturers/channel.svg",
    },
  ],
};
