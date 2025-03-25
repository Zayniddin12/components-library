import { Story } from "@storybook/vue3";

import SMarquee from "./SMarquee.vue";

export default {
    components: SMarquee,
    title: "Components/Marquee",
};

const Template: Story = (args) => ({
    components: {
        SMarquee,
    },
    setup() {
        return { args };
    },
    template: `
    <div class="bg-white p-4 space-y-5">
      <SMarquee  v-bind="args" />
    </div>
  `,
});

export const Marquee = Template.bind({});
Marquee.args = {
    partnersList: [
        {
            id: 1,
            title: "Brand 1",
            icon: "https://toshkent-parfum.uicgroup.tech/media/manufacturers/saint.svg",
        },
        {
            id: 2,
            title: "Brand 2",
            icon: "http://toshkent-parfum.uicgroup.tech/media/manufacturers/channel.svg"
        }
    ],
    toRight: 'right',
};
