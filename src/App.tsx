import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.scss";
import CardList from "./Components/CardList/CardList";
import { Beer } from "./types/types";
// import beers from "./Data/beers";
import Pagination from "./Components/Pagination/Pagination";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [beerData, setBeerData] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const beersPerPage = 25;

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
    setBeerData(data);
  };

  useEffect(() => {
    getData(beersPerPage, currentPage);
  }, [beersPerPage, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
  };

  //checks selected filter value and then updates state according to what filter has been selected
  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = event.currentTarget.value;
    const filterInput = event.currentTarget.checked;
    if (selectedFilter === "abv") {
      setIsCheckedABV(filterInput);
    } else if (selectedFilter === "first_brewed") {
      setIsCheckedFirstBrewed(filterInput);
    } else if (selectedFilter === "ph") {
      setIsCheckedPH(filterInput);
    }
  };

  const filteredBeers = beerData
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
    <BrowserRouter>
      <div className="display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cards"
            element={
              <>
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
                <footer>
                  <Pagination
                    currentPage={currentPage}
                    cardsPerPage={beersPerPage}
                    length={beerData.length}
                    onPageChange={handlePageChange}
                  />
                </footer>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
