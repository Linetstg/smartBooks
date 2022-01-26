export async function getBooks(
  inputBook: string,
  filter: string,
  sorting: string,
  startCount: number,
  maxCount: number,
  ) {

  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputBook}+subject:${filter}&orderBy=${sorting}&startIndex=${startCount}&maxResults=${maxCount}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Server is not response ${response.status}`);
      }

      return response.json();
    });

    return books;
}