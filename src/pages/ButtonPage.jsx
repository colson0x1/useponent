import { GoBell, GoContainer, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Add to Cart
        </Button>
      </div>
      <div>
        <Button className="mb-5" danger outline onMouseEnter={handleClick}>
          <GoContainer />
          Buy me a Coffee
        </Button>
      </div>
      <div>
        <Button className="mb-5" warning onMouseLeave={handleClick}>
          <GoDatabase />
          Order Now
        </Button>
      </div>
      <div>
        <Button className="mb-5" secondary rounded>
          Subscribe to Prime
        </Button>
      </div>
      <div>
        <Button className="mb-5" primary rounded outline>
          Update
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
