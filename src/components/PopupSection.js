import React from "react";
import styled from "styled-components";

import FormSection from "./FormSection";

const PopupSection = ({
  setModifying,
  setAddingNew,
  currentBook,
  setCurrentBook,
  currentBookList,
  setCurrentBookList,
}) => {
  const removePopup = () => {
    setModifying(false);
    setAddingNew(false);
    setCurrentBook({
      id: "",
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };
  return (
    <>
      <Popup>
        <h2>{currentBook.id ? "Modify Book" : "Add New Book"}</h2>
        {currentBook.id && <BookIdStyle>Book ID: {currentBook.id}</BookIdStyle>}
        <FormSection
          currentBook={currentBook}
          setCurrentBook={setCurrentBook}
          currentBookList={currentBookList}
          setCurrentBookList={setCurrentBookList}
          setModifying={setModifying}
          setAddingNew={setAddingNew}
        />
        <CloseButton onClick={removePopup}>close</CloseButton>
      </Popup>
      <Overlay onClick={removePopup} />
    </>
  );
};

const Popup = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50rem;
  max-width: 90%;

  position: fixed;
  height: 90%;
  min-height: fit-content;
  top: 5%;
  right: 0.5rem;

  background: #ffffed;
  z-index: 5;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: center;
`;

const BookIdStyle = styled.p`
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  text-transform: uppercase;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
export default PopupSection;
