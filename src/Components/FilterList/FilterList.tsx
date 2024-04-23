import { ChangeEventHandler } from "react";
import "./FilterList.scss";

const filters = [
  { id: 1, value: "abv", label: "High ABV > 6.0%" },
  { id: 2, value: "first_brewed", label: "Classic Range" },
  { id: 3, value: "ph", label: "Acidic (ph < 4)" },
];

type FilterListProps = {
  handleFilter: ChangeEventHandler<HTMLInputElement>;
  checked: string;
};

const FilterList = ({ handleFilter, checked }: FilterListProps) => {
  return (
    <div className="filter">
      {filters.map((filter) => (
        <label className="filter__label" key={filter.id}>
          <input
            className="filter__checkbox"
            type="checkbox"
            value={filter.value}
            checked={checked === filter.value}
            onChange={handleFilter}
            />
            <span className="filter__checkmark"></span>
            {filter.label}
        </label>
      ))}
    </div>
  );
};

export default FilterList;
