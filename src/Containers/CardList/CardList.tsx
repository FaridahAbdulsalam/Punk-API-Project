import Card from "../../Components/Card/Card";
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
        <Card
          key={beer.id}
          image={beer.image_url}
          name={
            <Link className="card-list__link" to={`/cards/${beer.name}`}>
              {beer.name}
            </Link>
          }
          tagline={beer.tagline}
          ingredients={beer.ingredients.malt.map((malt, index) => (
            <li key={index} className="card-list__bullets">
              {malt.name}
            </li>
          ))}
        />
      ))}
    </div>
  );
};

export default CardList;
