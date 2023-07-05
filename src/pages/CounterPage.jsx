import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'change-value-to-add') {
    return {
      ...state,
      valueToAdd: action.payload
    }
  }

  return state; 
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: 'change-value-to-add',
      payload: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-3xl py-4 text-blue-500">Count is {state.count}</h1>
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
          value={state.valueToAdd || ''}
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
