import { App } from "vue";
import { InputComponent } from "./components";
import { InputPluginOptions } from "./types/pluginType";
export { InputComponent };
const defaultOptions = {
  classNames: "default-class",
  hello: "world",
};
export default {
  install: (app: App, option: InputPluginOptions = defaultOptions) => {
    app.component("InputComponent", InputComponent);
    app.provide("InputPluginOptions", option);
  },
};
