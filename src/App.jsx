import { GoBell, GoContainer, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button secondary rounded outline>
          <GoBell />
          Add to Cart
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoContainer />
          Buy me a Coffee
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Order Now
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Subscribe to Prime
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          Update
        </Button>
      </div>
    </div>
  );
}

export default App;
