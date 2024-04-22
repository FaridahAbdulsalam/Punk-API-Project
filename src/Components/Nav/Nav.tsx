import { ChangeEventHandler, FormEventHandler } from 'react'
import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox";
import FilterList from '../FilterList/FilterList';


type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleFilter: ChangeEventHandler<HTMLSelectElement>;
};

const Nav = ({searchTerm, label, handleInput, handleFilter} : SearchBoxProps) => {

  return (
    <nav className='nav'>
      <h2>Nav Bar</h2>
      <SearchBox label={label} searchTerm={searchTerm} handleInput={handleInput}/>
     <FilterList handleFilter={handleFilter}/>
    </nav>
  )
}

export default Nav
