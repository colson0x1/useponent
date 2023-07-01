import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>Add to Cart</Button>
      </div>
      <div>
        <Button danger outline>Buy me a Coffee</Button>
      </div>
      <div>
        <Button warning outline>Order Now</Button>
      </div>
      <div>
        <Button secondary rounded>Subscribe to Prime</Button>
      </div>
      <div>
        <Button primary>Update</Button>
      </div>
    </div>
  );
}

export default App;
