import React from 'react';
import { Link } from 'react-router-dom';
import './BookForm.scss';



type Props = {
  setSearchBook: (event: string) => void,
  searchBook: string,
  setSelectedFilter: (event: string) => void,
  selectedFilter: string,
  setSelectedSorting: (event: string) => void,
  selectedSorting: string,
  getBook: () => void,
  setDownload: (text: string) => void,
}



export const BookForm: React.FC<Props> = ({
  setSearchBook,
  searchBook,
  setSelectedFilter,
  selectedFilter,
  setSelectedSorting,
  selectedSorting,
  getBook,
  setDownload,
}) => {

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event?.target.value);
  }

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event?.target.value);
  }

  const handleChangeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(event?.target.value);
  }


  return (
    <form
      className='App__form form'
      onSubmit={(event) => {
        event.preventDefault();
        setSearchBook('');
      }}
    >
      <div className='form__element '>
        <input
          type="text"
          placeholder="Search book"
          className="form__element--section"
          value={searchBook}
          onChange={handleChangeInput}
        />
        <Link
          className="form__element--link"
          to="/"
        >
          <button
            className="form__element--section"
            onClick={() => {
              getBook();
              setDownload('processin');
            }}

          >
            Search
          </button>
        </Link>

      </div>

      <div className='form__element '>
        <div>
          Categories
          <select
            className='form__element--section'
            value={selectedFilter}
            onChange={handleChangeFilter}
          >
            <option value="">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>

        <div>
          Sorting by
          <select
            className='form__element--section'
            value={selectedSorting}
            onChange={handleChangeSorting}

          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>


    </form>
  );
}