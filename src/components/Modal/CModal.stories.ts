import { Story } from "@storybook/vue3";
import { ref } from "vue";

import CModal, { Props } from "./CModal.vue";

export default {
  title: "Components/Modal",
  component: CModal,
  // parameters: {
  //     docs: {
  //         page: CModalDoc,
  //     },
  // },
};

const Template: Story<Props> = (args) => ({
  components: { CModal },

  setup() {
    const show = ref(false);
    return { args, show };
  },
  template: ` 
        <button @click="show = true">Show modal</button>
        <CModal v-bind="args" @close="show = false" :show="show" />
   `,
});

export const Modal = Template.bind({});
Modal.args = {};
