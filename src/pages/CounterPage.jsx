import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Panel className="m-3">
      <h1 className="text-3xl py-4 text-blue-500">Count is {count}</h1>
      <p className="text-lg py-4 text-blue-400">console.log({count})</p>
      <div className="flex flex-row">
        <Button
          className="mr-2 my-4 text-red-400"
          danger
          outline
          rounded
          onClick={decrement}
        >
          Decrement
        </Button>
        <Button
          className="mr-2 my-4"
          rounded
          primary
          outline
          onClick={increment}
        >
          Increment
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="text-lg text-blue-400">Add a lot!</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button className="" primary outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
