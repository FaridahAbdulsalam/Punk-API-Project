import { Beer } from "../../types/types";
import { useParams } from "react-router-dom";
import "./BeerInfo.scss"

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
       <div className="beer-info__banner">
        <img src={matchedBeer.image_url ?? undefined} className="beer-info__image beer-info__image--left"/>
      </div>
      <section className="beer-info__container">
      <h2 className="beer-info__heading">{matchedBeer?.name}</h2>
      <h1 className="beer-info__date">{`First Brewed: ${matchedBeer?.first_brewed}`}</h1>
      <h3>Recommended Food Pairings</h3>
      <ul> 
       {matchedBeer.food_pairing.map((pairing, index) => (
        <li className="beer-info__list" key={index}>{pairing}</li>
       ))}
      </ul>
      <p className="beer-info__tips">{matchedBeer?.brewers_tips}</p>
      <h3 className="beer-info__description">{matchedBeer?.description}</h3>
      </section>
      <div className="beer-info__banner">
        <img src={matchedBeer.image_url ?? undefined} className="beer-info__image beer-info__image--right"/>
      </div>
    </div>
  );
};

export default BeerInfo;
