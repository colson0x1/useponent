import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Johnnie Walker Red Label', value: 'jwRedLabel' },
    { label: 'Johnnie Walker Black Label', value: 'jwBlackLabel' },
    { label: 'Johnnie Walker Green Label', value: 'jwGreenLabel' },
    { label: 'Johnnie Walker Blue Label', value: 'jwBlueLabel' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
