import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

const books = [
  {
    id: 1,
    author: "Sun Tzu",
    title: "The Art Of War",
    img: "https://m.media-amazon.com/images/I/61DB25+yH9L._AC_UY218_.jpg",
  },
  {
    id: 2,
    author: "George Orwell",
    title: "1984",
    img: "https://m.media-amazon.com/images/I/81fcLJo+FNL._AC_UY218_.jpg",
  },
  {
    id: 3,
    author: "Jane Austen",
    title: "Pride and Prejudice",
    img: "https://m.media-amazon.com/images/I/91fDvMK+aEL._AC_UY218_.jpg",
  },
  {
    id: 4,
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    img: "https://m.media-amazon.com/images/I/71qovngeOcL._AC_UY218_.jpg",
  },
  {
    id: 5,
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    img: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UY218_.jpg",
  },
  {
    id: 6,
    author: "",
    title: "Atomic Habit",
    img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UY218_.jpg ",
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book.title);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} getBook={getBook} key={book.id}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img, id, getBook } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookList></BookList>
);
