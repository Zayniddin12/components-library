import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SRadioDoc from "../SRadio.mdx";
import SRadioGroup, { Props } from "./SRadioGroup.vue";

export default {
  title: "Components/Form/Radio",
  component: SRadioGroup,
  parameters: {
    docs: {
      page: SRadioDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SRadioGroup },
  setup() {
    const value = ref();
    return { args, value };
  },
  template: `
    <div class="bg-white rounded p-5">
      <SRadioGroup v-model="value" v-bind="args" />
    </div>
  `,
});

export const Group = Template.bind({});
Group.args = {
  labelKey: "name",
  valueKey: "id",
  items: [
    {
      id: 1,
      name: "Name",
    },
    {
      id: 2,
      name: "Surname",
    },
    {
      id: 3,
      name: "Birthdate",
    },
  ],
};
