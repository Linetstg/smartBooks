import React, { useState } from 'react';
import { getBooks } from './api/api';
import logo from './logo.svg';
import './App.scss';
import { BookList } from './components/BookList/BookList';
import { BookInfo } from './components/BookInfo/BookInfo';
import { Route, Routes } from 'react-router-dom';
import { BookForm } from './components/BookForm/BookForm';

export const App: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [selectedSorting, setSelectedSorting] = useState<string>('relevance');
  const [foundBooks, setFoundBooks] = useState<Books[]>([]);
  const [download, setDownload] = useState('');
  const [numberBooks, setNumberBooks] = useState<string | number>('');
  const [selectedBook, setSelectedBook] = useState<Books>({} as Books);

  
  const getBook = async (startCount: number = 0, maxCount: number = 30) => {
    const search = await getBooks(searchBook, selectedFilter, selectedSorting, startCount, maxCount)

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
    console.log(selectedId)
    const selectIteam = foundBooks.find(book => book.id === selectedId);

    if (selectIteam) {
      setSelectedBook(selectIteam);
    }
  }

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Search for books</h1>
        <BookForm 
          setSearchBook={setSearchBook}
          searchBook={searchBook}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          setSelectedSorting={setSelectedSorting}
          selectedSorting={selectedSorting}
          getBook={getBook}
          setDownload={setDownload}
        />

      </header>

      {download === 'processin' && (
        <div className="App__processin">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}

      {download === 'done' &&
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <BookList
                  foundBooks={foundBooks}
                  numberBooks={numberBooks}
                  findBook={getBookById}
                  getBook={getBook}
                />
              }
            />

            <Route
              path="/book-info"
              element={<BookInfo selectedBook={selectedBook} />}
            />

          </Routes>

        </div>
      }

    </div>
  );
};


