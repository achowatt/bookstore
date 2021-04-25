import React from "react";
import styled from "styled-components";
import BookDetails from "./BookDetails";

//Redux
import { useSelector } from "react-redux";

const BooklistSection = ({ setCurrentBookID, setPopupOpen }) => {
  //FETCH GAMES
  const currentBookList = useSelector((state) => state.bookList);
  return (
    <BookListContainer>
      <h2>Book List</h2>
      {currentBookList.length > 0 && (
        <ul className="book-list">
          {currentBookList.map((book) => (
            <BookDetails
              key={book.id}
              book={book}
              setCurrentBookID={setCurrentBookID}
              setPopupOpen={setPopupOpen}
            />
          ))}
        </ul>
      )}
      {currentBookList.length === 0 && (
        <p>
          There are currently no books in the store. To update, click + New.
        </p>
      )}
    </BookListContainer>
  );
};

const BookListContainer = styled.section`
  width: 100%;
  padding: 1rem;
  text-align: center;

  @media screen and (max-width: 700px) {
    padding: 0rem;
  }

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
