import { ChangeEventHandler, FormEventHandler } from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterItem from "../FilterItem/FilterItem";


type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isCheckedABV: boolean;
  isCheckedFirstBrewed: boolean;
  isCheckedPH: boolean;
};

const Nav = ({
  searchTerm,
  label,
  handleInput,
  onChange,
  isCheckedABV,
  isCheckedFirstBrewed,
  isCheckedPH, 
}: SearchBoxProps) => {
  return (
    <nav className="nav">
      <SearchBox
        label={label}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterItem onChange={onChange} isChecked={isCheckedABV} val={"abv"} label={"High Alcohol > 6.0%"} />
      <FilterItem onChange={onChange} isChecked={isCheckedFirstBrewed} val={"first_brewed"} label={"Classic Range"} />
      <FilterItem onChange={onChange} isChecked={isCheckedPH} val={"ph"} label={"Acidic (ph < 4)"} />
    </nav>
  );
};

export default Nav;
