import React from 'react'
import { Beer } from '../../types/types'

type BeerInfoProps = {
    beers: Beer[];
}

const BeerInfo = ({beers}:BeerInfoProps) => {

    const matchedBeer = beers.find((beer)=> beer.name)

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

