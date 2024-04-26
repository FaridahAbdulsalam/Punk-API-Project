import Card from "../Card/Card";
import { Beer } from "../../types/types";
import "./CardList.scss";
import { Link } from "react-router-dom";

type CardProps = {
  beers: Beer[];
};

const CardList = ({ beers }: CardProps) => {
  return (
    <div className="card-list__container">
      {beers.map((beer) => (
        <Link className="card-list__link" to={`/cards/${beer.name}`}>
        <Card
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
