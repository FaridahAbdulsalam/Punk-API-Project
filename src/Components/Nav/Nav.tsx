import { FormEventHandler } from 'react'
import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox";


type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const Nav = ({searchTerm, label, handleInput} : SearchBoxProps) => {

  return (
    <nav className='nav'>
      <h2>Nav Bar</h2>
      <SearchBox label={label} searchTerm={searchTerm} handleInput={handleInput}/>
      <p>Filter 1</p>
      <p>Filter 2</p>
      <p> Filter 3</p>
    </nav>
  )
}

export default Nav
