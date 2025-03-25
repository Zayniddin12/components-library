import { Story } from "@storybook/vue3";

import SButtonDoc from "./SButton.mdx";
import SButton, { Props } from "./SButton.vue";

export default {
  title: "Components/Button",
  component: SButton,
  parameters: {
    docs: {
      page: SButtonDoc,
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { SButton },

  setup() {
    return { args };
  },
  template: ` 
     <div>
        <div>
          <h2 class="text-2xl text-black mb-2 font-bold">Small</h2>
          
          <div class="flex flex-y-center w-full">

            <SButton class=" s-button-small mr-2 w-full " v-bind="args" text="Primary" variant="primary" icon="icon-money"/>

            <SButton class="s-button-secondary s-button-small mr-2 w-full" v-bind="args" text="Secondary" variant="warning"/>

            <SButton class="s-button-warning s-button-small mr-2 w-full" v-bind="args" text="Warning"/>

            <SButton class="s-button-danger s-button-small mr-2 w-full" v-bind="args" text="Danger"/>

            <SButton class="s-button-success s-button-small mr-2 w-full" v-bind="args" text="Success"/>

          </div>
        </div>
     
<!--     <div class="mt-3"> -->
<!--       <h2 class="text-2xl text-black mb-2 font-bold">Medium</h2>-->
<!--       -->
<!--       <div class="flex flex-y-center w-full">-->

<!--         <SButton class="s-button-primary s-button-medium mr-2 w-full " v-bind="args" text="Primary"/>-->

<!--         <SButton class="s-button-secondary s-button-medium mr-2 w-full" v-bind="args" text="Secondary"/>-->

<!--         <SButton class="s-button-warning s-button-medium mr-2 w-full" v-bind="args" text="Warning"/>-->

<!--         <SButton class="s-button-danger s-button-medium mr-2 w-full" v-bind="args" text="Danger"/>-->

<!--         <SButton class="s-button-success s-button-medium mr-2 w-full" v-bind="args" text="Success"/>-->

<!--       </div>-->

<!--     </div>-->

<!--        <div class="mt-3">-->
<!--          <h2 class="text-2xl text-black mb-2 font-bold">Large</h2>-->

<!--          <div class="flex flex-y-center w-full">-->

<!--            <SButton class=" s-button-large mr-2 w-full " v-bind="args" text="Primary" variant="secondary"/>-->

<!--            <SButton class="s-button-secondary s-button-large mr-2 w-full" v-bind="args" text="Secondary"/>-->

<!--            <SButton class="s-button-warning s-button-large mr-2 w-full" v-bind="args" text="Warning"/>-->

<!--            <SButton class="s-button-danger s-button-large mr-2 w-full" v-bind="args" text="Danger"/>-->

<!--            <SButton class="s-button-success s-button-large mr-2 w-full" v-bind="args" text="Success"/>-->

<!--          </div>-->

<!--        </div>-->

     </div>
   `,
});

export const Button = Template.bind({});
Button.args = {
  text: "Button",
  textClass: "text-white",
};

export const Loading = Template.bind({});
Loading.args = {
  text: "Button",
  textClass: "text-white",
  loading: true,
};
