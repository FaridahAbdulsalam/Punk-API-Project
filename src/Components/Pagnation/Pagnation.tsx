import { ChangeEventHandler, useState } from 'react'

type PagnationProps = {
    cardsPerPage: number;
    length: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagnation = ({cardsPerPage, length, currentPage, onPageChange}: PagnationProps) => {

const totalPages = Math.ceil(length/cardsPerPage)

const prevPage = () => {
    const newPage = currentPage - 1;
    if(newPage !== 1){
        onPageChange(newPage)
    }
}

const nextPage = () => {
    const newPage = currentPage + 1
    if(currentPage >= totalPages && currentPage < 13){
        onPageChange(newPage)
    }
}

  return (
    <div>
        <button onClick={prevPage}>Previous</button>
        <p>{currentPage}</p>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagnation
