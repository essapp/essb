import { theme } from 'antd';
import { LabelProps } from './interface';

const Label = (props: LabelProps) => (
  <label style={{ color: theme.useToken().token.colorTextLabel }}>
    {props.text}
  </label>
);

export default Label;
