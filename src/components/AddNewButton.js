import React from "react";
import styled from "styled-components";

const AddNewButton = ({ footerShowing, setPopupOpen }) => {
  return (
    <AddButton
      className={footerShowing ? "absolute" : "fixed"}
      onClick={() => setPopupOpen(true)}
    >
      + New
    </AddButton>
  );
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
  right: 1rem;

  &.fixed {
    position: fixed;
    bottom: 4rem;
  }

  &.absolute {
    position: absolute;
    bottom: 4rem;
  }

  &:hover {
    background: #e84545;
  }
`;

export default AddNewButton;
