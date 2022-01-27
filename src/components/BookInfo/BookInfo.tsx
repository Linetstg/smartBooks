import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSelectedBook } from '../../api/api';
import './BookInfo.scss';

type Props = {
  selectedBook: Books
}


export const BookInfo: React.FC<Props> = ({ selectedBook }) => {

  const [mainBook, setMaimBook] = useState({} as Books);
  
  

  useEffect(() => {
    getSelectedBook(selectedBook.id).then((select) => setMaimBook(select))
  }, [selectedBook.id])

  console.log(mainBook, selectedBook.id)
  const bookImage: BookImageLinks = mainBook.volumeInfo?.imageLinks;
  const mainImage = bookImage?.medium || bookImage?.small || bookImage?.smallThumbnail || bookImage?.thumbnail;
  console.log(bookImage)

  
  return (
    <div className="BookInfo">

      <div className="BookInfo__image">
        <img
          className="BookInfo__image--img"
          src={mainImage}
          alt="Book image"
        />
      </div>

      <div className="BookInfo__element">
        <div className="BookInfo__element--categories">
          {mainBook.volumeInfo?.categories?.map(categories => categories).join(' / ')}
        </div>

        <h2 className="BookInfo__element--title">
          {mainBook.volumeInfo?.title}
        </h2>

        <div className="BookInfo__element--authors">
          {mainBook.volumeInfo?.authors?.map(author => author).join(', ')}
        </div>
        <div className="BookInfo__element--description" dangerouslySetInnerHTML={{ __html: mainBook.volumeInfo?.description }} />
        <Link
          className="BookInfo__element--link"
          to="/"
        >
          &lArr; Back
        </Link>
      </div>



    </div>
  );
}