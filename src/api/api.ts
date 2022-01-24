export async function getBooks(inputBook: string) {
  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputBook}&key=AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8`)
    .then(result => result.json())

    return books;
}