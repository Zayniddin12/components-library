import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SSelectDoc from "./SSelect.mdx";
import SSelect, { Props } from "./SSelect.vue";

export default {
  title: "Components/Form/Select",
  component: SSelect,
  parameters: {
    docs: {
      page: SSelectDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SSelect },
  setup() {
    const value = ref();
    const defaultValue = ref(3);
    return { args, value, defaultValue };
  },
  template: `
    <div class="p-5 grid grid-cols-2">
      <SSelect v-model="value" v-bind="args" class="w-[400px] h-fit" :model-value="defaultValue" />
      <div class="bg-white text-black rounded p-5">
        <p class="flex space-x-2">
          <span>v-model:</span>
          <span>{{ value }}</span>
        </p>
        <p class="flex space-x-2">
          <span>Default value: 3 (Sorry, you can edit it from code!)</span>
        </p>
      </div>
    </div>
    `,
});

export const Select = Template.bind({});
Select.args = {
  options: [
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
    {
      id: 3,
      name: "Option 3",
    },
  ],
};

const CustomSelectedTemplate: Story<Props> = (args) => ({
  components: { SSelect },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `
    <div class="p-5">
      <SSelect v-model="value" v-bind="args" class="w-[400px]">
      <template #selectedOption="{ value }" >
        <span v-if="!value">Custom default state</span>
        <span v-else>
          Custom selected Value ID: {{ value?.id }}
        </span>
      </template>
      </SSelect>
    </div>
    `,
});

export const CustomSelected = CustomSelectedTemplate.bind({});
CustomSelected.args = {
  options: [
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
    {
      id: 3,
      name: "Option 3",
    },
  ],
};

const CustomOptionTemplate: Story<Props> = (args) => ({
  components: { SSelect },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `
    <div class="p-5">
      <SSelect v-model="value" v-bind="args" class="w-[400px]">
      <template #option="{ option }" >
        <span class="font-bold">Custom option: </span>
        <span>{{ option.id }}</span>
      </template>
      </SSelect>
    </div>
    `,
});

export const CustomOption = CustomOptionTemplate.bind({});
CustomOption.args = {
  options: [
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
    {
      id: 3,
      name: "Option 3",
    },
  ],
};
