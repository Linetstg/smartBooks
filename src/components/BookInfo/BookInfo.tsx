import React, { useState } from 'react';
import  { Link } from 'react-router-dom'

type Props = {
  selectedBook: Books
}


export const BookInfo: React.FC<Props> = ({ selectedBook }) => {



  console.log(selectedBook);

  return (
    <div className="BookInfo">
      <div className="BookInfo__info">
        <div className="BookInfo__info--details">
          {selectedBook.volumeInfo?.categories?.map(cata => cata).join(', ')}
        </div>

        <h2>
          {selectedBook.volumeInfo?.title}
        </h2>

        <div className="CurrentBook__info--details">
          {selectedBook.volumeInfo?.authors?.map(autor => autor).join(' / ')}
        </div>
        <div className="CurrentBook__info--details">
          {selectedBook.volumeInfo?.description}
        </div>
        <Link
         className="route-link"
         to="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
}