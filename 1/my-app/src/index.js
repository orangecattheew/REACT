// First component:
// Components are basically Javascript functions
import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";

// Always start naming react component in capital letters
// function Greeting() {
//   return (
//     <>
//       <h2>
//         My First <strong>Component</strong>
//       </h2>
//       <BookList />
//     </>
//   );
// }
// the above way to write code is JSX.

// function Greeting() {
//   return React.createElement("h2", {}, "My First Component");
// }

// greeting using arrow function
// const Greeting = () => {
//   return `<h2>My First Component</h2>`;
// };

// const [book1, book2, book3, book4, , book5] = books;
import { books, Book } from "./books";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    // The find method in JavaScript does not return a new array.
    // Instead, it returns the first element in the array that satisfies the provided testing function.
    // If no elements satisfy the testing function, find returns undefined.
    // It's important to note that find operates on an array and searches through its elements,
    // returning just a single element, not an array.

    console.log(book.title);
  };

  return (
    <div className="container">
      <h1>Best Seller In Books</h1>
      <section className="booklist">
        {/* <EventExamples></EventExamples> */}
        {books.map((book) => {
          // const { img, title, author, id } = book;

          // return <Book img={img} author={author} title={title} key={id} />;
          return <Book {...book} key={book.id} getBook={getBook} />; //when we want to pass in all the properties of an object
        })}
      </section>
    </div>
  );
};

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e); //can be used to check the property/Methods that can be used
//     console.log(`Input name: ${e.target.name}`);
//     console.log(`Input name: ${e.target.value}`);
//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type="submit">submit</button>
//       </form>
//       <div>
//         <button type="button" onClick={handleButtonClick}>
//           click me
//         </button>
//       </div>
//     </section>
//   );
// };
// const author = "Sun Tzu";
// const title = "The Art Of War";
// const img = "https://m.media-amazon.com/images/I/61DB25+yH9L._AC_UY218_.jpg";

// const Book = (props) => {
//   const { img, title, author, getBook, id } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       {/* <img src="{img}" alt="{title}" />  This is what i was doing wrong , giving these values inside string when they are already string */}
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       <button className="btn" onClick={() => getBook(id)}>
//         title
//       </button>
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://m.media-amazon.com/images/I/61DB25+yH9L._AC_UY218_.jpg"
//       alt="The Art Of War"
//     />
//   );
// };

// const Title = () => {
//   // const inlineHeading_style = {
//   //   color: "#617d98",
//   //   fontSize: "0.75rem",
//   //   marginTop: "0.5rem",
//   // };
//   // return <h2 style={inlineHeading_style}>The Art Of War</h2>;
//   return <h2>The Art Of War</h2>;
// };

// const Author = () => {
//   return (
//     <div>
//       <h4>Sun Tzu</h4>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting></Greeting>);
root.render(<BookList />);
