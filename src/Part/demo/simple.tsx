import Part from '../Part';
import { PartProps } from '../interface';

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value);
};
const items: PartProps = {
  itemType: 'input',
  itemProps: {
    autoFocus: true,
    onChange: onChange,
    title: '1',
  },
};

const App = () => {
  return <Part {...items} />;
};
export default App;
