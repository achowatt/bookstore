import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const FormSection = ({
  currentBook,
  setCurrentBook,
  currentBookList,
  setCurrentBookList,
  setModifying,
  setAddingNew,
}) => {
  const [inputName, setInputName] = useState(currentBook.name);
  const [inputPrice, setInputPrice] = useState(currentBook.price);
  const [categoryOption, setCategoryOption] = useState(currentBook.category);
  const [inputDescription, setInputDescription] = useState(
    currentBook.description
  );

  const editNameHandler = (e) => {
    setInputName(e.target.value);
  };

  const editPriceHandler = (e) => {
    setInputPrice(e.target.value);
  };

  const editCategoryHandler = (e) => {
    setCategoryOption(e.target.value);
  };

  const editDescriptionHandler = (e) => {
    setInputDescription(e.target.value);
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    const bookIndex = currentBookList.findIndex(
      (book) => book.id === currentBook.id
    );
    if (bookIndex !== -1) {
      currentBookList[bookIndex] = {
        id: currentBook.id,
        name: inputName,
        price: inputPrice,
        category: categoryOption,
        description: inputDescription,
      };
      //Notify Update
      console.log(`UPDATE: You've successfully modified book: ${inputName}`);
    } else {
      const newBook = {
        id: uuidv4(),
        name: inputName,
        price: inputPrice,
        category: categoryOption,
        description: inputDescription,
      };
      setCurrentBookList([...currentBookList, newBook]);
      //Notify Update
      console.log(`UPDATE: You've successfully added a book: ${inputName}`);
    }
    removePopup();
  };

  return (
    <form onSubmit={submitHandler}>
      <Label htmlFor="modify-book-name">Book Name</Label>
      <Input
        type="text"
        id="modify-book-name"
        value={inputName}
        onChange={editNameHandler}
      />

      <br />

      <Label htmlFor="modify-book-price">Price</Label>
      <Input
        type="text"
        id="modify-book-price"
        value={inputPrice}
        onChange={editPriceHandler}
      />

      <br />

      <Label htmlFor="modify-book-category">Category</Label>
      <Select
        name="modify-book-category"
        id="modify-book-category"
        value={categoryOption}
        onChange={editCategoryHandler}
      >
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Cookbooks">Cookbooks</option>
        <option value="Kidsbooks">Kids Books</option>
      </Select>

      <Label htmlFor="modify-book-description">Description</Label>
      <textarea
        value={inputDescription}
        onChange={editDescriptionHandler}
      ></textarea>
      <br />

      <ApplyButton type="submit">Apply</ApplyButton>
    </form>
  );
};

const maxwidth = "80%";

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  height: 1.5rem;
  width: 20rem;
  max-width: ${maxwidth};
`;

const Select = styled.select`
  margin-bottom: 1rem;
  height: 1.5rem;
  width: 20rem;
  max-width: ${maxwidth};
`;

const ApplyButton = styled.button`
  margin-top: 1rem;
  width: 20rem;
  padding: 0.5rem 0;
  max-width: ${maxwidth};
`;
export default FormSection;
