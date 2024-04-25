import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.scss";
import CardList from "./Components/CardList/CardList";
import { Beer } from "./types/types";
import ResultsCounter from "./Components/ResultsCounter/ResultsCounter";

const App = () => {
  const [beerData, setBeerData] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [beersPerPage, setBeersPerPage] = useState<number>(25);

  //Filters
  const [searchTerm, setSearchTeam] = useState<string>("");
  const [isCheckedABV, setIsCheckedABV] = useState<boolean>(false);
  const [isCheckedFirstBrewed, setIsCheckedFirstBrewed] =
    useState<boolean>(false);
  const [isCheckedPH, setIsCheckedPH] = useState<boolean>(false);

  const getData = async (results: number, page: number) => {
    const url = `http://localhost:3333/v2/beers?page=${page}&per_page=${results}`;
    const response = await fetch(url);
    const data: Beer[] = await response.json();
    console.log(data);
    setBeerData(data);
  };

  useEffect(() => {
    getData(beersPerPage, currentPage);
  }, [beersPerPage, currentPage]);

  const totalPages = Math.ceil(beerData.length / beersPerPage);
  const indexOfFirstBeer = (currentPage - 1) * beersPerPage;
  const indexOfLastBeer = indexOfFirstBeer + beersPerPage;
  const currentBeersOnPage = beerData.slice(indexOfFirstBeer, indexOfLastBeer);

  const handleResults = (event: ChangeEvent<HTMLInputElement>) => {
    const resultNum = event.currentTarget.value;
    setBeersPerPage(Number(resultNum));
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
    console.log(input);
  };

  //checks selected filter value and then updates state according to what filter has been selected
  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = event.currentTarget.value;
    const filterInput = event.currentTarget.checked;
    console.log(selectedFilter);
    if (selectedFilter === "abv") {
      setIsCheckedABV(filterInput);
    } else if (selectedFilter === "first_brewed") {
      setIsCheckedFirstBrewed(filterInput);
    } else if (selectedFilter === "ph") {
      setIsCheckedPH(filterInput);
    }
  };

  const filteredBeers = currentBeersOnPage
    .filter((beer) => {
      const date = beer.first_brewed.split("/");
      const year = Number(date[1]);
      const allFiltersApplied = beer.abv >= 6 && beer.ph <= 4 && year >= 2010;

      if (isCheckedABV && isCheckedPH && isCheckedFirstBrewed) {
        return allFiltersApplied;
      }

      if (isCheckedABV && isCheckedPH) {
        return beer.abv >= 6 && beer.ph <= 4;
      }

      if (isCheckedABV && isCheckedFirstBrewed) {
        return beer.abv >= 6 && year >= 2010;
      }

      if (isCheckedPH && isCheckedFirstBrewed) {
        return beer.ph <= 4 && year >= 2010;
      }

      if (isCheckedABV) {
        return beer.abv >= 6;
      }

      if (isCheckedPH) {
        return beer.ph <= 4;
      }

      if (isCheckedFirstBrewed) {
        return year >= 2010;
      }

      return true;
    })
    .filter((beer) => beer.name.toLowerCase().includes(searchTerm));

  // if(filteredBeers.length === 0){
  //   return false
  //   //alert("Sorry no beers match your search")
  // }

  return (
    <div className="display">
      <ResultsCounter
        min={10}
        max={50}
        label={`No. of Beers ${beersPerPage}`}
        id="beers-results"
        onChange={handleResults}
        value={beersPerPage}
      />
      
      <Nav
        searchTerm={searchTerm}
        label="search"
        handleInput={handleInput}
        onChange={handleFilter}
        isCheckedABV={isCheckedABV}
        isCheckedFirstBrewed={isCheckedFirstBrewed}
        isCheckedPH={isCheckedPH}
      />
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default App;
