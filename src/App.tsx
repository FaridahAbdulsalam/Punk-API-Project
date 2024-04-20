import { FormEvent, useState } from 'react';
import Nav from './Components/Nav/Nav';
import "./App.scss";
import beers from './Data/beers';
import CardList from './Components/CardList/CardList';



const App = () => { 

  const [searchTerm, setSearchTeam] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTeam(input);
    console.log(input);
  };

    const filteredBeers = beers.filter((beer) => {
         return beer.name.toLowerCase().includes(searchTerm);
       });

  return (
    <div className='display'>
      <Nav searchTerm={searchTerm} label="search" handleInput={handleInput}/>
      <CardList beers={filteredBeers}/>
    </div>
  )
}

export default App

