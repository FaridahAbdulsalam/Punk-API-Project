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
      <div className='card__content'>
        <h1 className='card_name'>{name}</h1>
        <p className='card__tag'>{tagline}</p>
      </div>
    </div>
  )
}

export default Card
