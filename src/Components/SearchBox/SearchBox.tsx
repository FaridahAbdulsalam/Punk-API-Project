import { FormEventHandler } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-box">
      <label className="search-box__label" htmlFor={label}></label>
      <input 
      className="search-box__input"
        type="text"
        id={label}
        name={label}
        placeholder={`${capitalizedLabel}...`}
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBox;
