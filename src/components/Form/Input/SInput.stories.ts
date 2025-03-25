import { Story } from "@storybook/vue3";
import { ref } from "vue";

import EyeToggle from "../EyeToggle/SEyeToggle.vue";
import KInput, { Props } from "./SInput.vue";

export default {
  title: "Components/Form/Input",
  component: KInput,
};

const Template: Story<Props> = (args) => ({
  components: { KInput },
  setup() {
    const value = ref();
    return { args, value };
  },
  template: `
    <div>
      <KInput v-model="value" v-bind="args" />
    </div>
    `,
});

const PrefixTemplate: Story<Props> = (args) => ({
  components: { KInput },
  setup() {
    return { args };
  },
  template: `
    <KInput v-bind="args">
        <template #prefix>
            <span class="text-warning">$</span>
        </template>
        <template #suffix>
          <span class="text-warning">.00</span>
        </template>
    </KInput>
    `,
});

export const BaseInput = Template.bind({});
BaseInput.args = {
  type: "text",
  placeholder: "Enter text",
  error: false,
  minlength: 0,
  maxlength: 100,
  min: 0,
  max: 100,
};

export const WithContent = PrefixTemplate.bind({});
WithContent.args = {
  type: "number",
  placeholder: "Enter amount",
};

const PasswordTemplate: Story<Props> = (args) => ({
  components: { KInput, EyeToggle },
  setup() {
    const type = ref("password");
    const value = ref("");
    function toggleType() {
      type.value = type.value === "password" ? "text" : "password";
    }

    return { args, type, toggleType, value };
  },
  template: `
    <div class="inline-block">
      <KInput v-bind="args" :type="type" v-model="value">
        <template #suffix>
          <div class="flex items-center justify-center">
            <EyeToggle
              :type-password="type === 'password'"
              color="#E4E6EF"
              @click="toggleType"
            />
          </div>
        </template>
      </KInput>
    </div>
    `,
});

export const PasswordInput = PasswordTemplate.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Password",
};
