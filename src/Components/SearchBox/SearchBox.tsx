import React, { FormEventHandler } from "react";

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SeachBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
  <div>
    <label htmlFor={label}>{capitalizedLabel}</label>
    <input
    type="text"
    id={label}
    name={label}
    value={searchTerm}
    onInput={handleInput}/>
  </div>
  );
};

export default SeachBox;
