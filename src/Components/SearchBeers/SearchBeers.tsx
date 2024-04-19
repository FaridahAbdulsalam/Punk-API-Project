import React, { FormEvent, useState } from "react";
import { Beer } from "../../types/types";
import SearchBox from "../SearchBox/SearchBox";

type SearchBeersProps = {
  beers: Beer[];
};

const SearchBeers = ({ beers }: SearchBeersProps) => {
  const [searchTerm, setSearchTeam] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
    console.log(input);
  };

  // const filteredBeers = beers.filter((beer) => {
  //   return beer.name.toLowerCase().includes(searchTerm);
  // });

  return (
    <div>
      <SearchBox
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
    </div>
  );
};

export default SearchBeers;
