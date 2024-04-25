import { ChangeEventHandler, useState } from 'react'

type PagnationProps = {
    cardsPerPage: number;
    length: number;
    onChange: (page: number) => void;
}

const Pagnation = ({cardsPerPage, length, onChange}: PagnationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);


const pageNumbers = []

for (let i = 1; i <= Math.ceil(length / cardsPerPage); i++){
    pageNumbers.push(i)
}

const prevPage = () => {
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
        onChange(currentPage - 1)
    }
}

const nextPage = () => {
    if(currentPage <= pageNumbers.length){
        console.log(currentPage);
        setCurrentPage(currentPage + 1)
        console.log(currentPage);
        onChange(currentPage + 1)
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

/*
   <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                /> */