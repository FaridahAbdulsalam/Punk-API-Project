import { ChangeEventHandler } from "react";

const filters = 
[
    {id: 1, value: "abv", label: "High ABV > 6.0%"},
    {id: 2, value: "first_brewed", label: "Classic Range"},
    {id: 3, value: "ph", label: "Acidic (ph < 4)"},
];

type FilterListProps = {
    handleFilter: ChangeEventHandler<HTMLInputElement>;
    checked: string;
}

const FilterList = ({handleFilter, checked}: FilterListProps) => {
  return (
    <div className="filter">
       {filters.map((filter => (
        <label key={filter.id}>
            <input
            type="checkbox"
            value={filter.value}
            checked={checked === filter.value}
            onChange={handleFilter}
            />
            {filter.label}
        </label>
       )))}
    </div>
  );
};

export default FilterList;


