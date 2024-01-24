export interface InputPluginOptions {
  classNames: string;
  hello?: string;
}

export type InputType =
  | "text"
  | "number"
  | "password"
  | "email"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color";

export interface Props {
  modelValue: string | number | null;
  textType?: InputType;
  label?: string;
}
