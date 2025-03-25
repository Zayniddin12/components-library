import { Story } from "@storybook/vue3";
import { ref } from "vue";

import KCheckboxGroup, { Props } from "./SCheckboxGroup.vue";

export default {
  title: "Components/Form/Checkbox",
  component: KCheckboxGroup,
};

const Template: Story<Props> = (args) => ({
  components: { KCheckboxGroup },
  setup() {
    const value = ref([]);
    return { args, value };
  },
  template: `
    <div class="bg-white rounded p-5">
      <KCheckboxGroup v-model="value" v-bind="args" />
      <pre class="mt-4">v-model: {{ value }}</pre>
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
      name: "Birthdate",
    },
  ],
};
