import React from 'react';
import Part from '../Part';
import { PartProps } from '../interface';

const items: PartProps = {
  optionType: 'date',
  optionProps: { picker: 'date', title: '2' },
};

const App = () => {
  return <Part {...items} />;
};
export default App;
