import { h, createApp } from "vue";

const RootComponent = {
  render() {
    return h("div", "hello world");
  },
};

createApp(RootComponent).mount("#app");
