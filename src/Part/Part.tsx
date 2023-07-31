import {
  Button,
  Checkbox,
  DatePicker,
  Image,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from 'antd';
import { forwardRef } from 'react';
import type {
  ButtonProps,
  CheckboxProps,
  DateProps,
  ImageProps,
  InputNumberProps,
  InputProps,
  PartProps,
  PartRef,
  PasswordProps,
  RadioGroupProps,
  SearchProps,
  SelectProps,
  TextAreaProps,
} from './interface';

const Part = forwardRef<PartRef, PartProps>((props, ref) => {
  const { itemProps, itemType, ...rest } = props;
  if (itemType === 'date') {
    const { title: dateTitle, ...dateProps } = itemProps as DateProps;
    return (
      <Tooltip title={dateTitle}>
        <DatePicker ref={ref} {...dateProps} {...rest}></DatePicker>
      </Tooltip>
    );
  }
  switch (itemType) {
    case 'button':
      return (
        <Button ref={ref} {...(itemProps as ButtonProps)} {...rest}></Button>
      );
      break;
    case 'checkbox':
      return (
        <Checkbox
          ref={ref}
          {...(itemProps as CheckboxProps)}
          {...rest}
        ></Checkbox>
      );
      break;
    case 'image':
      return <Image {...(itemProps as ImageProps)} {...rest}></Image>;
      break;
    case 'number':
      return (
        <InputNumber
          ref={ref}
          {...(itemProps as InputNumberProps)}
          {...rest}
        ></InputNumber>
      );
      break;
    case 'password':
      return (
        <Input.Password
          ref={ref}
          allowClear
          {...(itemProps as PasswordProps)}
          {...rest}
        ></Input.Password>
      );
      break;
    case 'radio':
      return (
        <Radio.Group
          ref={ref}
          {...(itemProps as RadioGroupProps)}
          {...rest}
        ></Radio.Group>
      );
      break;
    case 'search':
      return (
        <Input.Search
          ref={ref}
          allowClear
          {...(itemProps as SearchProps)}
          {...rest}
        ></Input.Search>
      );
      break;
    case 'select':
      return (
        <Select ref={ref} {...(itemProps as SelectProps)} {...rest}></Select>
      );
      break;
    case 'textArea':
      return (
        <Input.TextArea
          ref={ref}
          allowClear
          {...(itemProps as TextAreaProps)}
          {...rest}
        ></Input.TextArea>
      );
      break;
    // case 'time':
    //   const { title: timeTitle, ...timeProps } = itemProps as TimeProps;
    //   return (
    //     <Tooltip title={timeTitle}>
    //       <TimePicker ref={ref} {...timeProps} {...rest}></TimePicker>;
    //     </Tooltip>
    //   );
    //   break;
    // case 'timeRange':
    //   const { title: timeRangeTitle, ...timeRangeProps } =
    //     itemProps as TimeRangeProps;
    //   return (
    //     <Tooltip title={timeRangeTitle}>
    //       <TimePicker.RangePicker
    //         ref={ref}
    //         {...timeRangeProps}
    //         {...rest}
    //       ></TimePicker.RangePicker>
    //     </Tooltip>
    //   );
    //   break;
    default:
      return (
        <Input
          ref={ref}
          allowClear
          {...(itemProps as InputProps)}
          {...rest}
        ></Input>
      );
  }
});

export default Part;
