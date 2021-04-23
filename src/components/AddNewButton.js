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
  background: #ffc107e8;
  font-size: 1.5rem;
  color: white;
  border-radius: 4px;
  position: fixed;
  bottom: 250px;
  right: 1rem;

  &:hover {
    background: #ffb007;
  }
`;

export default AddNewButton;
