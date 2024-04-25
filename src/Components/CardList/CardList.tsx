import Card from "../Card/Card";
import { Beer } from "../../types/types";
import "./CardList.scss";

type CardProps = {
  beers: Beer[];
};

const CardList = ({ beers }: CardProps) => {
  return (
    <div className="card-list__container">
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
