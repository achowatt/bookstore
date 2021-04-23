import React from "react";
import styled from "styled-components";
import BookDetails from "./BookDetails";

const BooklistSection = ({ setModifying, setCurrentBook, currentBookList }) => {
  return (
    <BookListContainer>
      <h2>Book List</h2>
      <ul className="book-list">
        {currentBookList.map((book) => (
          <BookDetails
            key={book.id}
            id={book.id}
            name={book.name}
            price={book.price}
            category={book.category}
            description={book.description}
            setModifying={setModifying}
            setCurrentBook={setCurrentBook}
          />
        ))}
      </ul>
    </BookListContainer>
  );
};

const BookListContainer = styled.section`
  width: 100%;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 3rem;
  }

  ul {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
  }
`;

export default BooklistSection;
