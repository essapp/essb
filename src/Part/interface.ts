import type {
  ButtonProps,
  CheckboxProps,
  ImageProps,
  InputNumberProps,
  InputProps,
  InputRef,
  RadioGroupProps,
  SelectProps,
  TimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import {
  PickerDateProps,
  RangePickerProps,
} from 'antd/lib/date-picker/generatePicker';
import type { PasswordProps, SearchProps, TextAreaProps } from 'antd/lib/input';
import { Dayjs } from 'dayjs';

type ScrollAlign = 'top' | 'bottom' | 'auto';
type ScrollConfig =
  | {
    index: number;
    align?: ScrollAlign;
    offset?: number;
  }
  | {
    key: React.Key;
    align?: ScrollAlign;
    offset?: number;
  };

type ScrollTo = (arg: number | ScrollConfig) => void;

export interface BaseSelectRef {
  focus: () => void;
  blur: () => void;
  scrollTo: ScrollTo;
}
export type PartRef = React.Ref<BaseSelectRef> &
  React.Ref<HTMLElement> &
  React.Ref<HTMLInputElement> &
  React.Ref<InputRef> &
  any &
  React.Ref<any>;

interface DatePickerProps extends Omit<PickerDateProps<Dayjs>, 'dateRender'> {
  title: string;
}

export type ItemType = 'button'
  | 'checkbox'
  | 'date'
  | 'dateRange'
  | 'image'
  | 'input'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'select'
  | 'textArea'
  | 'time'
  | 'timeRange';

interface DateRangeProps extends Omit<RangePickerProps<Dayjs>, 'dateRender'> {
  title: string;
};
interface TimeProps extends TimePickerProps { title: string };
interface TimeRangeProps extends TimeRangePickerProps { title: string };
export interface PartProps {
  optionType: ItemType;
  optionProps: ButtonProps & CheckboxProps & DatePickerProps & DateRangeProps & ImageProps & InputProps & InputNumberProps & PasswordProps & RadioGroupProps & SearchProps & SelectProps & TextAreaProps & TimeProps
}