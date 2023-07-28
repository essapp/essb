import {
  Button,
  Checkbox,
  DatePicker,
  Image,
  Input,
  InputNumber,
  Radio,
  Select,
  TimePicker,
  Tooltip,
} from 'antd';
import { forwardRef } from 'react';
import { PartProps, PartRef } from './interface';

const Part = forwardRef<PartRef, PartProps>((props, ref) => {
  const {
    buttonProps,
    checkboxProps,
    dateProps,
    dateRangeProps,
    imageProps,
    inputProps,
    numberProps,
    optionType,
    passwordProps,
    radioProps,
    searchProps,
    selectProps,
    textAreaProps,
    timeProps,
    timeRangeProps,
    ...rest
  } = props;
  switch (optionType) {
    case 'button':
      return <Button ref={ref} {...buttonProps} {...rest}></Button>;
      break;
    case 'checkbox':
      return <Checkbox ref={ref} {...checkboxProps} {...rest}></Checkbox>;
      break;
    case 'date':
      return (
        <Tooltip title={dateProps?.title}>
          <DatePicker ref={ref} {...dateProps} {...rest}></DatePicker>
        </Tooltip>
      );
      break;
    case 'dateRange':
      return (
        <Tooltip title={dateRangeProps?.title}>
          <DatePicker.RangePicker
            ref={ref}
            {...dateRangeProps}
            {...rest}
          ></DatePicker.RangePicker>
        </Tooltip>
      );
      break;
    case 'image':
      return <Image {...imageProps} {...rest}></Image>;
      break;
    case 'number':
      return <InputNumber ref={ref} {...numberProps} {...rest}></InputNumber>;
      break;
    case 'password':
      return (
        <Input.Password
          ref={ref}
          allowClear
          {...passwordProps}
          {...rest}
        ></Input.Password>
      );
      break;
    case 'radio':
      return <Radio.Group ref={ref} {...radioProps} {...rest}></Radio.Group>;
      break;
    case 'search':
      return (
        <Input.Search ref={ref} allowClear {...searchProps} {...rest}></Input.Search>
      );
      break;
    case 'select':
      return <Select ref={ref} {...selectProps} {...rest}></Select>;
      break;
    case 'textArea':
      return (
        <Input.TextArea
          ref={ref}
          allowClear
          {...textAreaProps}
          {...rest}
        ></Input.TextArea>
      );
      break;
    case 'time':
      return (
        <Tooltip title={timeProps?.title}>
          <TimePicker ref={ref} {...timeProps} {...rest}></TimePicker>;
        </Tooltip>
      );
      break;
    case 'timeRange':
      return (
        <Tooltip title={timeRangeProps?.title}>
          <TimePicker.RangePicker
            ref={ref}
            {...timeRangeProps}
            {...rest}
          ></TimePicker.RangePicker>
        </Tooltip>
      );
      break;
    default:
      return <Input ref={ref} allowClear {...inputProps} {...rest}></Input>;
  }
});

export default Part;
