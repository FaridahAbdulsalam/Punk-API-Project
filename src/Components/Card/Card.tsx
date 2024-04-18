import React from 'react'
import "./Card.scss"


type CardProps = {
    image: string;
    name: string;
    tagline: string;
}

const Card = ({image, name, tagline} : CardProps) => {
  return (
    <div className='card'>
      <img className='card__image' src={image} alt="image of beer"/>
      <h1 className='card_name'>{name}</h1>
      <p className='card__tag'>{tagline}</p>
    </div>
  )
}

export default Card
