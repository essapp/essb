import type { FieldProps } from "..";

export interface HrowProps {
  items: Array<{
    readonly id: PropertyKey;
    label?: string;
    fieldProps: FieldProps;
  }>;
}

export { default as Hrow } from "./Hrow.vue";
