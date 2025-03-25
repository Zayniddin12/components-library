import { Story } from "@storybook/vue3";
import { ref } from "vue";

import SEyeToggle, { Props } from "./SEyeToggle.vue";

export default {
  title: "Components/Form/EyeToggle",
  component: SEyeToggle,
};

const Template: Story<Props> = (args) => ({
  components: { SEyeToggle },
  setup() {
    const value = ref();
    const type = ref("password");
    function toggleType() {
      type.value = type.value === "password" ? "text" : "password";
    }

    return { args, value, type, toggleType };
  },
  template: `
    <div>
      <SEyeToggle
        :type-password="type === 'password'"
        color="#E4E6EF"
        @click="toggleType"
      />
    </div>
    `,
});

export const EyeToggle = Template.bind({});
EyeToggle.args = {
  type: "text",
  placeholder: "Enter text",
  error: false,
  minlength: 0,
  maxlength: 100,
  min: 0,
  max: 100,
};
