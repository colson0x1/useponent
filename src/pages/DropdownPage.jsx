import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [whiskeySelection, setWhiskeySelection] = useState(null);
  const [smokeSelection, setSmokeSelection] = useState(null);

  const handleWhiskeySelect = (option) => {
    setWhiskeySelection(option);
  };

  const handleSmokeSelect = (option) => {
    setSmokeSelection(option);
  };

  const whiskey = [
    { label: 'Johnnie Walker Red Label', value: 'jwRedLabel' },
    { label: 'Johnnie Walker Black Label', value: 'jwBlackLabel' },
    { label: 'Johnnie Walker Green Label', value: 'jwGreenLabel' },
    { label: 'Johnnie Walker Blue Label', value: 'jwBlueLabel' },
  ];

  const smoke = [
    { label: 'Marlboro Red', value: 'marlboroRed' },
    { label: 'Weed', value: 'weed' },
    { label: 'Treasurer Luxury Black', value: 'treasurerBlack' },
    { label: 'Cigar', value: 'cigar' },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={whiskey}
        value={whiskeySelection}
        onChange={handleWhiskeySelect}
      />
      <Dropdown
        options={smoke}
        value={smokeSelection}
        onChange={handleSmokeSelect}
      />
    </div>
  );
}

export default DropdownPage;
