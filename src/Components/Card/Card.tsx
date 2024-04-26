import Button from "../Button/Button";
import "./Card.scss";
import { useState } from "react";
import Cross from "../../assets/images/x-square (1).png";

type CardProps = {
  image: string;
  name: any;
  tagline: string;
  ingredients: any;
};

const Card = ({ image, name, tagline, ingredients }: CardProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const hancleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="card">
      <img className="card__image" src={image} alt="image of beer" />
      <div className="card__content">
        <h1 className="card_name">{name}</h1>
        <p className="card__tag">{tagline}</p>
        {!showInfo && (
          <div className="card__button">
            <button onClick={hancleClick} className="card__info-open">
              Check out Ingredients
            </button>
          </div>
        )}

        {showInfo && (
          <div className="card__info">
            <img
              src={Cross}
              className="card__info-close"
              onClick={hancleClick}
            />
            <p>{ingredients}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
