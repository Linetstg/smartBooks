import React from 'react';
import { BookCard } from '../BookCard/BookCard';
import './BookList.scss'


type Props = {
  foundBooks: Books[],
  numberBooks: string | number,
  findBook: (selectedId: string | number) => void,
  getBook: (startCount: number) => void,
}


export const BookList: React.FC<Props> = ({ foundBooks, numberBooks, findBook, getBook }) => {


  return (
    <div className="BookList">
      <h2 className="BookList__number">{`Found ${numberBooks} results`}</h2>
      <ul className="BookList__element">
        {foundBooks && foundBooks.map(book =>
          <li
            className="BookList__element--card"
            key={book.id}
          >

            <BookCard
              book={book}
              findBook={findBook}
            />

          </li>
        )}
      </ul>

      <div className="BookList__pagination">
        {foundBooks?.length < 30 || numberBooks === foundBooks?.length  || numberBooks === 0 ? '' 
        :<button
          type="button"
          className="BookList__pagination--button"
          onClick={() => {
            getBook(foundBooks.length);
          }}
        >
          Load more
        </button>}
      </div>
    </div>
  );
}