import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';
const DECREMENT_COUNT = 'decrement';

const reducer = (state, action) => {
  /* 
  @ Using Immer
  */
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
      return;
  }

  /* 
  @ Using classic Reducer 
  */
  // switch (action.type) {
  //   case INCREMENT_COUNT:
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  //   case DECREMENT_COUNT:
  //     return {
  //       ...state,
  //       count: state.count - 1,
  //     };
  //   case ADD_VALUE_TO_COUNT:
  //     return {
  //       ...state,
  //       count: state.count + state.valueToAdd,
  //       valueToAdd: 0,
  //     };
  //   case SET_VALUE_TO_ADD:
  //     return {
  //       ...state,
  //       valueToAdd: action.payload,
  //     };
  //   default:
  //     return state;
  // }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
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
