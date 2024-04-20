import Card from "../Card/Card";
import { Beer } from "../../types/types";


type CardProps = {
  beers: Beer[];
};

const CardList = ({ beers }: CardProps) => {


  return (
    <div>
      {beers.map((beer) => (
        <Card
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      ))}
    </div>
  );
};

export default CardList;
