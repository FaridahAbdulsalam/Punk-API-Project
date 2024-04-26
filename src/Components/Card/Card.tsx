import Button from "../Button/Button";
import "./Card.scss"
import { useState } from "react";


type CardProps = {
    image: string;
    name: any;
    tagline: string;
    ingredients: any;
}

const Card = ({image, name, tagline, ingredients} : CardProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const hancleClick = () => {
    setShowInfo(!showInfo)
  }

  const cardInFront = (
    <div onClick={hancleClick}>
      <Button title="Find Out More"/>
    </div>
  );

  const infoAtBack = (
    <>
    <button onClick={hancleClick}>close</button>
    {ingredients}
    </>
  )

  let infoClassName = "card__info"
  if (showInfo) infoClassName += "card__info--info"

  return (
    <div className='card'>
      <img className='card__image' src={image} alt="image of beer"/>
      <div className='card__content'>
        <h1 className='card_name'>{name}</h1>
        <p className='card__tag'>{tagline}</p>
        {showInfo ? infoAtBack : cardInFront}
      </div>
    </div>
  )
}

export default Card
