import { App } from "vue";
import { InputComponent, SampleComponent } from "./components";
import { InputPluginOptions } from "./types/pluginType";
export * from "./style.css";
const defaultOptions = {
  classNames: "default-class",
  hello: "world",
};
const InputPlugin = {
  install: (app: App, option: InputPluginOptions = defaultOptions) => {
    app.component("InputComponent", InputComponent);
    app.component("SampleComponent", SampleComponent);
    app.provide("InputPluginOptions", option);
  },
};

export { InputPlugin, InputComponent, SampleComponent };
