import React from "react";
import styled from "styled-components";

const AddNewButton = () => {
  return <AddButton> + New </AddButton>;
};

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 4rem; */
  padding: 0 1rem;
  height: 4rem;
  border: none;
  background: rgb(255, 158, 13);
  font-size: 1.5rem;
  color: white;
  border-radius: 4px;
  position: fixed;
  top: 250px;
  right: 1rem;
`;

export default AddNewButton;
