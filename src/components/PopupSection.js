import React from "react";
import styled from "styled-components";

import FormSection from "./FormSection";

const PopupSection = () => {
  return (
    <>
      <Popup>
        <h2>Modify Book</h2>
        <BookIdStyle>Book ID: 23WD4R</BookIdStyle>
        <FormSection />
        <CloseButton>close</CloseButton>
      </Popup>
      <Overlay />
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
  height: 100vh;
  top: 0;
  right: 0;

  background: white;
  z-index: 5;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: center;

  display: none;
`;

const BookIdStyle = styled.p`
  margin-bottom: 2rem;
`;

const Overlay = styled.div`
  display: none;
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
