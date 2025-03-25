import { Story } from "@storybook/vue3";

import CTable, { Props } from "./CTable.vue";

export default {
  title: "Components/Table",
  component: CTable,
  // parameters: {
  //     docs: {
  //         page: CTableDoc,
  //     },
  // },
};

const Template: Story<Props> = (args) => ({
  components: { CTable },

  setup() {
    return { args };
  },
  template: ` 
        <CTable v-bind="args" />
        <h1 class="text-xl my-3">With custom slots</h1>
        <CTable v-bind="args">
             <template #header>
               Table header slot
             </template>
            <template #footer>
              Table footer slot
            </template>
            <template #name="{data}">
              <span class="text-red-500">{{ data?.name }}</span>
            </template>
             <template #email="{data}">
               <span class="bg-primary p-2 text-white">{{ data?.email }}</span>
             </template>
             <template #phone="{data}">
               +1{{ data?.phone }}
             </template>
        </CTable>
   `,
});

export const Table = Template.bind({});
Table.args = {
  head: [
    {
      title: "№",
      key: "_index",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Phone",
      key: "phone",
    },
  ],
  data: [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "08123456789",
    },
    {
      name: "Jonatan Donatan",
      email: "jonatan@johndoe.com",
      phone: "08123456789",
    },
    {
      name: "Jonatan Donatan",
      email: "jonatan@johndoe.com",
      phone: "08123456789",
    },
  ],
  page: 1,
  limit: 10,
};
