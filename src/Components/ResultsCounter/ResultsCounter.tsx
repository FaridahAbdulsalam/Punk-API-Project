import React, { ChangeEventHandler } from "react";

type ResultsCounterProps = {
  label: string;
  id: string;
  option: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: number;
};

const ResultsCounter = ({
  label,
  id,
  option,
  onChange,
  value,
}: ResultsCounterProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name="results" onChange={onChange}>
        <option value={value}>{option}</option>
      </select>
    </div>
  );
};

export default ResultsCounter;
