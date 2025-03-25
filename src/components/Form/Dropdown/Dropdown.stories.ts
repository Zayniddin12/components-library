import { Story } from "@storybook/vue3";

import DropdownItem from "./DropdownItem.vue";
import Dropdown, { Props } from "./SDropdown.vue";

export default {
  title: "Components/Form/Dropdown",
  component: Dropdown,
};

const Template: Story<Props> = (args) => ({
  components: { Dropdown, DropdownItem },

  setup() {
    const list = [
      {
        name: "Option-1",
        icon: "icon-watch",
      },
      {
        name: "Option-2",
        icon: "icon-watch",
      },
      {
        name: "Option-3",
        icon: "icon-watch",
      },
      {
        name: "Option-4",
        icon: "icon-watch",
      },
      {
        name: "Option-5",
        icon: "icon-delete-3",
      },
    ];
    return { args, list };
  },
  template: `
    <div class="bg-white p-6 rounded-lg">
    <Dropdown v-bind="args" :list="list" >
      <template #head>
        <div>Head</div>
      </template>
    </Dropdown>
    </div>  
  `,
});

export const DropDown = Template.bind({});
DropDown.args = {
  position: "left",
  arrow: true,
};
