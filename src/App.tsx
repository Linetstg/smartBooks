import React, { useState } from 'react';
import { getBooks } from './api/api';
import logo from './logo.svg';
import './App.scss';

export const App: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event?.target.value)
  }

  const getBook = async () => {
    const search = await getBooks(searchBook)
    console.log(search)
  }









  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Search for books</h1>
        <form
          className='App__form form'
          onSubmit={(event) => {
            event.preventDefault();
            setSearchBook('')
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
            <button
              className="form__element--section"
              onClick={() => getBook()}
            >
              Search
            </button>
          </div>

          <div className='form__element '>
            <div>
              Categories
              <select
                className='form__element--section'
              >
                <option value="all">All</option>
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
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>


        </form>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}


      </header>
    </div>
  );
}


