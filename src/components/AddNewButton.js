import React from "react";
import styled from "styled-components";

const AddNewButton = ({ setAddingNew }) => {
  return <AddButton onClick={() => setAddingNew(true)}> + New </AddButton>;
};

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 4rem; */
  padding: 0 1rem;
  height: 4rem;
  border: none;
  background: #e84545c7;
  font-size: 1.5rem;
  color: white;
  border-radius: 4px;
  position: fixed;
  bottom: 7%;
  right: 1rem;

  &:hover {
    background: #e84545;
  }
`;

export default AddNewButton;
