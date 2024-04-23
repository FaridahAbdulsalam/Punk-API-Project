import { ChangeEventHandler, FormEventHandler } from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleFilter: ChangeEventHandler<HTMLInputElement>;
  checked: string;
};

const Nav = ({
  searchTerm,
  label,
  handleInput,
  handleFilter,
  checked,
}: SearchBoxProps) => {
  return (
    <nav className="nav">
      <SearchBox
        label={label}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterList handleFilter={handleFilter} checked={checked} />
    </nav>
  );
};

export default Nav;
