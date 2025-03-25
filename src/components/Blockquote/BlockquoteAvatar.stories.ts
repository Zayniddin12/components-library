import { Story } from "@storybook/vue3";

import BlockquoteAvatar from "./BlockquoteAvatar.vue";

export default {
  components: BlockquoteAvatar,
  title: "Components/Blockquote/BlockquoteAvatar",
};

const Template: Story = (args) => ({
  components: {
    BlockquoteAvatar,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <BlockquoteAvatar v-bind="args"  />
    </div>
  `,
});

export const BlockQuote = Template.bind({});
BlockQuote.args = {
  text:
    "Har bir yirik kompaniya faqatgina oʻziga emas, balki yonida yelkadosh boʻlgan hamda ishonganlarga minnatdorchilik bildirishi lozim. Axir, bizning ishda eng muhim prinsip - bu ishonch.\n" +
    "Ishonch nafaqat mijoz va hamkorlar sadoqatini ta’minlaydi, qolversa, o’zimizga bo’lgan talabchanligimizni oshiradi. Biz uzoq yillik insoniylik an’analari ustiga qurilgan munosabatlar asosida hamkorlik qilamiz.",
  avatarName: "Murodxo'ja Muratov",
  avatarPosition: "CEO at UIC Group",
  avatarImg : "https://uic.group/media/Blog/photo_2021-03-16_18-51-52.jpg"
};
