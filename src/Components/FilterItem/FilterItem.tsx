import { ChangeEventHandler } from 'react'
import "./FilterItem.scss"


type FilterItemProps = {
    val: string;
    isChecked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: string;
}
const FilterItem = ({val, isChecked, onChange, label}: FilterItemProps) => {
  return (
    <div>
      <label htmlFor={label}>
        <input 
        type='checkbox'
        id={val}
        value={val}
        checked={isChecked}
        onChange={onChange}
        />
        {label}
      </label>
    </div>
  )
}

export default FilterItem
