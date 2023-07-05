import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1 className="text-3xl py-4 text-blue-500">Count is {count}</h1>
      <p className="text-lg py-4 text-blue-400">console.log({count})</p>
      <Button primary rounded outline onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
