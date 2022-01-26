export async function getBooks(
  inputBook: string,
  filter: string,
  sorting: string,
  startCount: number,
  maxCount: number,
  ) {

  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputBook}+subject:${filter}&orderBy=${sorting}&startIndex=${startCount}&maxResults=${maxCount}&key=AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8`)
    .then(result => result.json())

    return books;
}