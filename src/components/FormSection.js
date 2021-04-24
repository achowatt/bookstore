import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

//Redux
import { useDispatch } from "react-redux";

const FormSection = ({
  currentBook,
  setCurrentBook,
  currentBookList,
  setCurrentBookList,
}) => {
  const [inputName, setInputName] = useState(currentBook.name);
  const [inputPrice, setInputPrice] = useState(currentBook.price);
  const [categoryOption, setCategoryOption] = useState(currentBook.category);
  const [inputDescription, setInputDescription] = useState(
    currentBook.description
  );

  //REDUX
  const dispatch = useDispatch();

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
    dispatch({ type: "MODIFYING_CLOSED" });
    dispatch({ type: "ADDING_NEW_CLOSED" });

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
    //Add form validation
    //
    //

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
    } else {
      const newBook = {
        id: uuidv4(),
        name: inputName,
        price: inputPrice,
        category: categoryOption,
        description: inputDescription,
      };
      setCurrentBookList([...currentBookList, newBook]);
    }
    removePopup();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor="modify-book-name">Book Name</Label>
      <Input
        type="text"
        id="modify-book-name"
        value={inputName}
        onChange={editNameHandler}
        required
      />

      <br />

      <Label htmlFor="modify-book-price">Price</Label>
      <Input
        type="text"
        id="modify-book-price"
        value={inputPrice}
        onChange={editPriceHandler}
        required
      />

      <br />

      <Label htmlFor="modify-book-category">Category</Label>
      <Select
        name="modify-book-category"
        id="modify-book-category"
        value={categoryOption}
        onChange={editCategoryHandler}
        required
      >
        <option value="">Select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Cookbooks">Cookbooks</option>
        <option value="Kidsbooks">Kids Books</option>
        <option value="Other">Other</option>
      </Select>

      <Label htmlFor="modify-book-description">Description</Label>
      <Textarea
        id="modify-book-description"
        value={inputDescription}
        onChange={editDescriptionHandler}
        required
      ></Textarea>
      <br />

      <ApplyButton type="submit">Apply</ApplyButton>
    </Form>
  );
};

const Form = styled.form`
  width: 20rem;
  max-width: 100%;
  padding: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1.3rem;
`;

const Input = styled.input`
  margin-bottom: 1.7rem;
  height: 2rem;
  padding-left: 0.5rem;
  width: 100%;
  border: solid 1px #ababab;
`;

const Select = styled.select`
  margin-bottom: 1rem;
  height: 2rem;
  width: 100%;
  border: solid 1px #ababab;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  resize: none;
  height: 6rem;
  width: 100%;
  border: solid 1px #ababab;
  padding: 0.5rem;
`;
const ApplyButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 0;
  width: 100%;
  background: #232946;
  color: white;
  border: none;

  &:hover {
    background: #e84545;
  }
`;
export default FormSection;
