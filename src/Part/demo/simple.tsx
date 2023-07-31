import { InputProps } from 'antd';
import React from 'react';
import Part from '../Part';
import { PartProps } from '../interface';

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value);
};
const inputProps: InputProps = {
  autoFocus: true,
  onChange: onChange,
  title: '1',
};
const items: PartProps = {
  itemType: 'input',
  itemProps: inputProps,
};

const App = () => {
  return <Part {...items} />;
};
export default App;
