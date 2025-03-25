import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SButton from "../Button/SButton.vue";
import STooltip, { Props } from "./STooltip.vue";

export default {
  title: "Components/Tooltip",
  component: STooltip,
};

const Template: Story<Props> = (args) => ({
  components: { STooltip, SButton },

  setup() {
    const showTooltip = ref(false);
    return { showTooltip, args };
  },
  template: `
    <div class="py-10 flex items-center gap-4">
      <SButton class="group relative">
        Hover me!
        <STooltip>Hi :)</STooltip>
      </SButton>

      <SButton class="relative" @click="showTooltip = true">
        Click me!
        <STooltip :show="showTooltip" with-trigger @hide="showTooltip = false">Hi again :)</STooltip>
      </SButton>
    </div>
   `,
});

export const Tooltip = Template.bind({});
Tooltip.args = {
  text: "Button",
  textClass: "text-white",
};
