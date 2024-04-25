import { ChangeEventHandler } from 'react'

type ResultsCounterProps = {
    min: number,
    max: number;
    label: string;
    id: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: number;
}

const ResultsCounter = ({min, max, label, id,   onChange,  value}: ResultsCounterProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
      id={id}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      />      
    </div>
  )
}

export default ResultsCounter
