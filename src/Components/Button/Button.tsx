import React from 'react'

type ButtonProps = {
    title: string
}

const Button = ({title}:ButtonProps) => {
  return (
    <div>
      <button className='find-out'>{title}</button>
    </div>
  )
}

export default Button
