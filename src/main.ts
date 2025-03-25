import "@/styles/index.css";
import "floating-vue/dist/style.css";

import { VClosePopper, VTooltip } from "floating-vue";
import { createApp } from "vue";

import definePlugins from "@/plugins";

import App from "./App.vue";

const app = createApp(App);
// Define your plugins inside @/plugins.ts. It is required for storybook support.
definePlugins(app);
app.directive("tooltips", VTooltip);
app.directive("close-popover", VClosePopper);
app.mount("#app");
