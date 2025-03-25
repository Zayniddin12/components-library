import { Story } from "@storybook/vue3";

import BlockquoteIcon from "./BlockquoteIcon.vue";

export default {
  components: BlockquoteIcon,
  title: "Components/Blockquote/BlockquoteIcon",
};

const Template: Story = (args) => ({
  components: {
    BlockquoteIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-white p-4 space-y-5">
      <BlockquoteIcon v-bind="args"  />
    </div>
  `,
});

export const BlockQuote = Template.bind({})
BlockQuote.args = {
  text : 'Har bir yirik kompaniya faqatgina oʻziga emas, balki yonida yelkadosh boʻlgan hamda ishonganlarga minnatdorchilik bildirishi lozim. Axir, bizning ishda eng muhim prinsip - bu ishonch.\n' +
    'Ishonch nafaqat mijoz va hamkorlar sadoqatini ta’minlaydi, qolversa, o’zimizga bo’lgan talabchanligimizni oshiradi. Biz uzoq yillik insoniylik an’analari ustiga qurilgan munosabatlar asosida hamkorlik qilamiz.'
}