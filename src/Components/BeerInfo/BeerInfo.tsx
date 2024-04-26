import { Beer } from "../../types/types";
import { useParams } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { beerName } = useParams();

  const matchedBeer = beers.find((beer) => beer.name === beerName);

  if (!matchedBeer) {
    return <p>Could not find a beer with that name</p>;
  }

  return (
    <div className="beer-info" >
      <h2 className="beer-info__heading">{matchedBeer?.name}</h2>
      <h1 className="beer-info__date">{matchedBeer?.first_brewed}</h1>
      <h3>Recommended Food Pairings</h3>
      <ul> 
       {matchedBeer.food_pairing.map((pairing, index) => (
        <li className="beer-info__list" key={index}>{pairing}</li>
       ))}
      </ul>
      <p className="beer-info__tips">{matchedBeer?.brewers_tips}</p>
      <h3 className="beer-info__description">{matchedBeer?.description}</h3>
    </div>
  );
};

export default BeerInfo;
