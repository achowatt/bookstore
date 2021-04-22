import React from "react";
import styled from "styled-components";

const FormSection = () => {
  return (
    <form>
      <Label for="modify-book-name">Book Name</Label>
      <Input type="text" id="modify-book-name" />

      <br />

      <Label for="modify-book-price">Price</Label>
      <Input type="text" id="modify-book-price" />

      <br />

      <Label for="modify-book-category">Category</Label>
      <Select name="modify-book-category" id="modify-book-category">
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="cookbooks">Cookbooks</option>
        <option value="kidsbooks">Kids Books</option>
      </Select>

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
