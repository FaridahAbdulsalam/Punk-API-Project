import React, { FormEvent, useState } from "react";
import Card from "../Card/Card";
import { Beer } from "../../types/types";
import SearchBox from "../SearchBox/SearchBox";

type CardProps = {
  beers: Beer[];
};

const CardList = ({ beers }: CardProps) => {
  const [searchTerm, setSearchTeam] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
  };

  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <SearchBox label="Search" searchTerm={searchTerm} handleInput={handleInput}/>
      {filteredBeers.map((beer) => (
        <Card
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      ))}
    </div>
  );
};

export default CardList;
