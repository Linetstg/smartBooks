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
    <div className="BookCard">
      <Link
        to="book-info"
        className="router-link"
        onClick={() => findBook(book.id)}
      >
        <img
          className="BookCard__img"
          src={volumeInfo.imageLinks?.thumbnail}
          alt="Book image"
        />

        <div className="BookCard__value">
          <p className="BookCard__value--category">{volumeInfo.categories?.find(categories => categories) || ''} </p>
          <h3 className="BookCard__value--title">{volumeInfo.title}</h3>
          <p className="BookCard__value--autor">{volumeInfo.authors}</p>
        </div>
      </Link>
    </div>
  );
}