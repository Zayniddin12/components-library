import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SNews from "./SNews.vue";

export default {
  title: "Components/Cards/News",
  component: SNews,
};

const Template: Story = (args) => ({
  components: {
    SNews,
  },
  setup() {
    const count = ref(0);
    return { args, count };
  },
  template: `
    <div class="grid grid-cols-4 gap-4">
      <SNews v-for="i in 4" :key="i" v-bind="args" />
    </div>
  `,
});

export const News = Template.bind({});
News.args = {
  data: {
    published_date: "23-Iyul, 2005",
    image: "https://picsum.photos/339/191",
    title:
      "Abdusattorov yana bir turnirda ishtirok etadi - unga kimlar raqiblik qilishi mumkin?",
    short_description:
      "Oʻzbekiston shaxmat federatsiyasiga Yevropaning shaxmat sovrinini frantsiyalik mashhur grossmeyster topshirgan.",
  },
  loading: false,
};
