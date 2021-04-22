import React from "react";
import styled from "styled-components";

const HeaderSection = () => {
  return (
    <header>
      <HeaderBackground></HeaderBackground>
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
  background: rgb(255 223 176);
`;

export default HeaderSection;
