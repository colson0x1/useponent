import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const whiskey = [
    { label: 'Johnnie Walker Red Label', value: 'jwRedLabel' },
    { label: 'Johnnie Walker Black Label', value: 'jwBlackLabel' },
    { label: 'Johnnie Walker Green Label', value: 'jwGreenLabel' },
    { label: 'Johnnie Walker Blue Label', value: 'jwBlueLabel' },
  ];

  const smoke = [
    { label: 'Marlboro Red' },
    { label: 'Weed' },
    { label: 'Treasurer Luxury Black' },
    { label: 'Cigar' },
  ];

  return (
    <div className="flex">
      <Dropdown options={whiskey} value={selection} onChange={handleSelect} />
      <Dropdown options={smoke} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
