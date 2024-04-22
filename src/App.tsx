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

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const filterInput = event.currentTarget.value;
    // console.log(filterInput);
    setSelectedFilter(filterInput);
    selectedFilter;
  };

  const filteredBeers = beers
    .filter((beer) => {
      if (selectedFilter === "All") return true;

      if (selectedFilter === "abv") {
        return beer.abv <= 6;
      }

      if (selectedFilter === "ph") {
        return beer.ph >= 4;
      }
      return false;
    })
    .filter((beer) => beer.name.toLowerCase().includes(searchTerm));

  // const filteredBeers = beers.filter((beer) => {
  //   if (selectedFilter === "All") return true;
  //   return selectedFilter === "abv" && beer.abv <= 6;}).filter(beer => beer.name.toLowerCase().includes(searchTerm));

  return (
    <div className="display">
      <Nav
        searchTerm={searchTerm}
        label="search"
        handleInput={handleInput}
        handleFilter={handleFilter}
      />
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default App;
