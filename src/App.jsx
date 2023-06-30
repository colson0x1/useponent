import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>Add to Cart</Button>
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
        <Button>Update</Button>
      </div>
    </div>
  );
}

export default App;
