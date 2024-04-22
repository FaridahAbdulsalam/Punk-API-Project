import { ChangeEvent, FormEvent, useState } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.scss";
import beers from "./Data/beers";
import CardList from "./Components/CardList/CardList";

const App = () => {
  const [searchTerm, setSearchTeam] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
    console.log(input);
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const filterInput = event.currentTarget.value;
    console.log(filterInput);
    setSelectedFilter(filterInput);
  };

  const filteredBeers = beers
    .filter((beer) => {
      const date = beer.first_brewed.split("/")
      const year = Number(date[1]);
      
      if (selectedFilter === "All" || !selectedFilter) return true;

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


