import { Story } from "@storybook/vue3";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CardPerson, { Props } from "./CardPerson.vue";

export default {
  title: "Components/Animation Cards",
  component: CardPerson,
};

const Template: Story<Props> = (args: Props) => ({
  components: { CardPerson },
  setup() {
    return { args };
  },
  template: `<div class="m-12">
  <CardPerson v-bind="args" />
  </div>
  `,
});

export const PersonCard = Template.bind({});
PersonCard.args = {
  images: [
    {
      img: "https://apilenta.uicgroup.tech/media/author/2022/01/01_mUJKnaH.jpg",
    },
    {
      img: "https://pbs.twimg.com/media/FeH0h5VWAAIScZo?format=jpg&name=large",
    },
    {
      img: "https://marketing.uz/uploads/articles/2605/article-original.jpg",
    },
  ],
};
