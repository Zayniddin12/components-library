import Vue from "vue";

const app = Vue.createApp({});

app.directive("tooltip", {
  mounted(el, text) {
    el.focus();
    console.log(el, text);
  },
  getSSRProps(binding, vnode) {
    // you can provide SSR-specific props here
    console.log(binding, vnode);
    return {};
  },
});
