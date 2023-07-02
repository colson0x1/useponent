import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Johnnie Walker Red Label', value: 'jw-rlabel' },
    { label: 'Johnnie Walker Black Label', value: 'jw-blabel' },
    { label: 'Johnnie Walker Green Label', value: 'jw-glabel' },
    { label: 'Johnnie Walker Blue Label', value: 'jw-blabel' },
  ];

  return (
    <Dropdown options={options} selection={selection} onSelect={handleSelect} />
  );
}

export default App;
