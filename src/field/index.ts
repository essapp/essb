import type {
  ButtonProps,
  CheckProps,
  DateProps,
  ImageProps,
  InputProps,
  NumberProps,
  RadioProps,
  RangeProps,
  SelectProps,
  SwitchProps,
  TextProps,
  TimeProps,
} from "..";
// import { Dayjs } from 'dayjs';

export type ItemType =
  | "button"
  | "check"
  | "date"
  | "dateRange"
  | "image"
  | "input"
  | "number"
  | "password"
  | "radio"
  | "search"
  | "select"
  | "switch"
  | "text"
  | "time"
  | "timeRange";

export type ItemProps =
  | ButtonProps
  | CheckProps
  | DateProps
  | ImageProps
  | InputProps
  | NumberProps
  | RadioProps
  | RangeProps
  | SelectProps
  | SwitchProps
  | TextProps
  | TimeProps;

export interface FieldProps {
  itemType: ItemType;
  itemProps?: ItemProps;
}

export { default as Field } from "./Field.vue";
