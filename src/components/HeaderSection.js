import React from "react";
import styled from "styled-components";

const HeaderSection = () => {
  return (
    <header>
      <HeaderBackground>
        <h1>Book Store</h1>
      </HeaderBackground>
    </header>
  );
};

const HeaderBackground = styled.div`
  /* background-image: url("books.jpg"); */
  filter: blur(1px);
  filter: drop-shadow(10);
  height: 200px;
  width: 100%;
  display: flex;
  color: white;
`;

export default HeaderSection;
