import { GoBell, GoContainer, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';


function ButtonPage() {
  const handleClick = () => {
    console.log('clicked!!');
  }

  return (
    <div>
      <div>
        <Button secondary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Add to Cart
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoContainer />
          Buy me a Coffee
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
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

export default ButtonPage;
