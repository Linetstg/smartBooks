import React, { useState } from 'react';
import { getBooks } from './api/api';
import logo from './logo.svg';
import './App.scss';
import { BookList } from './components/BookList/BookList';
import { BookInfo } from './components/BookInfo/BookInfo';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [selectedSorting, setSelectedSorting] = useState<string>('relevance');
  const [foundBooks, setFoundBooks] = useState<Books[]>([]);
  const [download, setDownload] = useState('');
  const [numberBooks, setNumberBooks] = useState<string | number>('');
  const [selectedBook, setSelectedBook] = useState<Books>({} as Books);

  console.log(foundBooks);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event?.target.value);
  }

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event?.target.value);
  }

  const handleChangeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(event?.target.value);
  }

  const getBook = async (startCount: number = 0, maxCount: number = 30) => {
    const search = await getBooks(searchBook, selectedFilter, selectedSorting, startCount, maxCount)

    console.log(search);
    if (search) {
      setDownload('done');
    }

    if (!startCount) {
      setFoundBooks(search.items);
      setNumberBooks(search.totalItems);
    } else {
      setFoundBooks([...foundBooks, ...search.items]);
    }

  }

  const getBookById = (selectedId: string | number) => {
    const selectIteam = foundBooks.find(book => book.id === selectedId);

    if (selectIteam) {
      setSelectedBook(selectIteam);
    }
  }

  console.log(foundBooks);







  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Search for books</h1>
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
            <button
              className="form__element--section"
              onClick={() => {
                getBook();
                setDownload('processin');
              }}

            >
              Search
            </button>
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



      </header>

      {download === 'processin' && (
        <div className="App__processin">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}

      {download === 'done' &&
        <div>

          <BookList
            foundBooks={foundBooks}
            numberBooks={numberBooks}
            findBook={getBookById}
          />
          {/* <Routes>
            <Route
              path="/"
              element={
                <BookList
                  foundBooks={foundBooks}
                  numberBooks={numberBooks}
                  findBook={getBookById}
                />
              }
            />

            <Route
              path="/book-info"
              element={<BookInfo selectedBook={selectedBook} />}
            />

            <Route
              path="*"
              element={<Navigate to="/" />}
            />


          </Routes> */}

        </div>
      }

    </div>
  );
};


