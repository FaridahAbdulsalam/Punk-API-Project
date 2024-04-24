import { ChangeEvent, FormEvent, useState } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.scss";
import beers from "./Data/beers";
import CardList from "./Components/CardList/CardList";
import { Beer } from "./types/types";

const App = () => {
  const [beerData, setBeerData] = useState<Beer[]>([]);
  const [searchTerm, setSearchTeam] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState("");
  
  
  const getData = async () => {
    const url = "http://localhost:3333/v2/beers?page=1&per_page=80";
    const response = await fetch(url);
    const data: Beer = await response.json();
    // console.log(data);
  }
  // getData();

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
    console.log(input);
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const filterInput = event.currentTarget.value;
    if(filterInput === selectedFilter){
      return setSelectedFilter("");
    }else{
      return setSelectedFilter(filterInput);
    }   
  };

  const filteredBeers = beers
    .filter((beer) => {
      const date = beer.first_brewed.split("/")
      const year = Number(date[1]);
      
      if (!selectedFilter) return true;

      if (selectedFilter === "abv") {
        return beer.abv <= 6;
      }

      if (selectedFilter === "ph") {
        return beer.ph >= 4;
      }

      if (selectedFilter === "first_brewed") {
        return year >= 2010
      }

      return false;
    })
    .filter((beer) => beer.name.toLowerCase().includes(searchTerm));


  return (
    <div className="display">
      <Nav
        searchTerm={searchTerm}
        label="search"
        handleInput={handleInput}
        handleFilter={handleFilter}
        checked={selectedFilter}
      />
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default App;


