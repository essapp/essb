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
import type {
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
export type PartRef =
  | React.Ref<BaseSelectRef>
  | React.Ref<HTMLElement>
  | React.Ref<HTMLInputElement>
  | React.Ref<InputRef>
  | any
  | React.Ref<any>;

interface DatePickerProps extends Omit<PickerDateProps<Dayjs>, 'dateRender'> {
  title: string;
}

export type ItemType =
  | 'button'
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

export {
  ButtonProps,
  CheckboxProps,
  DatePickerProps,
  ImageProps,
  InputNumberProps,
  InputProps,
  PasswordProps,
  RadioGroupProps,
  SearchProps,
  SelectProps,
  TextAreaProps,
};
export interface DateProps extends DatePickerProps {
  title: string;
}
export interface DateRangeProps
  extends Omit<RangePickerProps<Dayjs>, 'dateRender'> {
  title: string;
}
export interface TimeProps extends TimePickerProps {
  title: string;
}
export interface TimeRangeProps extends TimeRangePickerProps {
  title: string;
}
export interface PartProps {
  itemType: ItemType;
  itemProps:
    | ButtonProps
    | CheckboxProps
    | DateProps
    | DateRangeProps
    | ImageProps
    | InputProps
    | InputNumberProps
    | PasswordProps
    | RadioGroupProps
    | SearchProps
    | SelectProps
    | TextAreaProps
    | TimeProps
    | TimeRangeProps;
}
