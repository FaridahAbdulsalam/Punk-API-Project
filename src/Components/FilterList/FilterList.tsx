import React, { ChangeEventHandler } from "react";

type FilterListProps = {
    handleFilter: ChangeEventHandler<HTMLSelectElement>
}

const FilterList = ({handleFilter}: FilterListProps) => {
  return (
    <div className="filter">
        <label>Filter by:
            <select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="abv">ABV</option>
                <option value="first_brewed">Classic Range</option>
                <option value="ph">PH</option>
            </select>
        </label>
    </div>
  );
};

export default FilterList;
