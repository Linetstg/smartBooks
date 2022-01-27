import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.scss'

type Props = {
  book: Books,
  findBook: (id: number | string) => void,
}


export const BookCard: React.FC<Props> = ({ book, findBook }) => {

  const volumeInfo = book.volumeInfo;


  return (
    <Link
      to="book-info"
      className="BookCard"
      onClick={() => findBook(book.id)}
    >
      <div className="BookCard__img">
        <img
          src={volumeInfo.imageLinks?.thumbnail}
          alt="Book image"
          className="BookCard__img--element"
        />
      </div>


      <div className="BookCard__value">
        <p className="BookCard__value--category">{volumeInfo.categories?.find(categories => categories) || ''} </p>
        <h3 className="BookCard__value--title">{volumeInfo.title}</h3>
        <p className="BookCard__value--autor">{volumeInfo.authors}</p>
      </div>
    </Link>

  );
}