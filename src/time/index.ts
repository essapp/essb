import { type TimePickerProps } from "ant-design-vue";

export { TimePicker as Time } from "ant-design-vue";
export interface TimeProps extends TimePickerProps {
  title: string;
}
