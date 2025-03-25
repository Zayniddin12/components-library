import { Story } from "@storybook/vue3";

import ImageUpload, { Props } from "./ImageUpload.vue";

export default {
  title: "Components/Form/ImageUpload",
  component: ImageUpload,
};

const Template: Story<Props> = (args) => ({
  components: { ImageUpload },

  setup() {
    return { args };
  },
  template: '<ImageUpload v-bind="args" />',
});

export const Upload = Template.bind({});
Upload.args = {
  desc: "Загрузите изображение вашего автомобиля.",
};

// export const UploadSmall = Template.bind({});
// UploadSmall.args = {
//   small: true,
//   desc: "Загрузите изображение вашего автомобиля.",
// };
//
// export const UploadError = Template.bind({});
// UploadError.args = {
//   error: true,
//   desc: "Загрузите изображение вашего автомобиля.",
// };
