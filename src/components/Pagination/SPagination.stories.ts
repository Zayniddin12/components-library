import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SPagination, { Props } from "./SPagination.vue";

export default {
  title: "Components/Pagination/Pagination",
  component: SPagination,
  // parameters: {
  //     docs: {
  //         page: CModalDoc,
  //     },
  // },
};

const Template: Story<Props> = (args) => ({
  components: { SPagination },

  setup() {
    const page = ref(1);
    return { args, page };
  },
  template: ` 
        <SPagination v-bind="args" :current-page="page" @input="(e) => page = e" pagination-buttons />
   `,
});

export const Pagination = Template.bind({});
Pagination.args = {
  total: 1247,
  limit: 10,
  currentPage: 1,
};
