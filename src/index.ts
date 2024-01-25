import { App } from "vue";
import { InputComponent } from "./components";
import { InputPluginOptions } from "./types/pluginType";
const defaultOptions = {
  classNames: "default-class",
  hello: "world",
};
const InputPlugin = {
  install: (app: App, option: InputPluginOptions = defaultOptions) => {
    app.component("InputComponent", InputComponent);
    app.provide("InputPluginOptions", option);
  },
};

export { InputPlugin, InputComponent };
