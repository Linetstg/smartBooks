import React, { useState } from 'react';
import { BookCard } from '../BookCard/BookCard';
import './BookList.scss'


type Props = {
  foundBooks: Books[],
  numberBooks: string | number,
  findBook: (selectedId: string | number) => void,
} 


export const BookList: React.FC<Props> = ({ foundBooks, numberBooks, findBook }) => {




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
    </div>
  );
}