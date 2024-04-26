import { Beer } from '../../types/types'
import { useParams } from 'react-router-dom';

type BeerInfoProps = {
    beers: Beer[];
}

const BeerInfo = ({beers}:BeerInfoProps) => {
  const {beerName} = useParams()

    const matchedBeer = beers.find((beer)=> beer.name === beerName)

    if(!matchedBeer){
        return <p>Could not find a beer with that name</p>
    }

  return (
    <div>
      <h2>{matchedBeer?.name}</h2>
      <h1>{matchedBeer?.first_brewed}</h1>
      <p>{matchedBeer?.food_pairing}</p>
      <p>{matchedBeer?.brewers_tips}</p>
      <h3>{matchedBeer?.description}</h3>
    </div>
  )
}

export default BeerInfo;

