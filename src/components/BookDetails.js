import React from "react";
import { CardButtons } from "../styles/mixinStyle";
import styled from "styled-components";

//REDUX
import { useDispatch } from "react-redux";
import { deleteAction } from "../actions/updatedBookList";
const BookDetails = ({
  id,
  name,
  price,
  category,
  description,
  setCurrentBook,
}) => {
  //REDUX
  const dispatch = useDispatch();

  const modifyBook = () => {
    dispatch({ type: "MODIFYING" });
    setCurrentBook({
      id,
      name,
      category,
      price,
      description,
    });
  };

  const deleteBook = () => {
    dispatch(deleteAction(id));
  };

  return (
    <BookInfoCard id={id}>
      <div className="wrapper">
        <div className="book-info">
          <h4>{name}</h4>
          <p className="category">{category}</p>
          <p className="price">$ {price}</p>
        </div>
        <div className="book-description">{description}</div>
      </div>

      <div className="modify-delete-container">
        <ModifyButton onClick={modifyBook}>Modify</ModifyButton>
        <DeleteButton onClick={deleteBook}>Delete</DeleteButton>
      </div>
    </BookInfoCard>
  );
};

const BookInfoCard = styled.li`
  box-shadow: 2px 0px 14px rgb(0 0 0 / 10%);
  border-radius: 5px;
  background: #fffff6;

  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    position: relative;
  }

  .category {
    color: #4e4e4e;
  }

  .book-description {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: grid;
    place-items: center;
    background: #fffff6;
    padding: 1rem;
    visibility: hidden;
    opacity: 0;
    color: grey;
    transition: all 0.4s;
  }

  .wrapper {
    position: relative;
  }

  .wrapper:hover .book-description {
    visibility: visible;
    opacity: 1;
    transition: all 0.4s;
  }

  .price {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 9px;
    color: #c53737;
  }

  .modify-delete-container {
    position: relative;
    height: 30px;
  }
`;

const ModifyButton = styled(CardButtons)`
  position: absolute;
  left: 0px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%);
`;

const DeleteButton = styled(CardButtons)`
  position: absolute;
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%);
  right: 0px;
`;

export default BookDetails;
