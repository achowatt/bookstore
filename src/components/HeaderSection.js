import React from "react";
import styled from "styled-components";
import logo2 from "../Logo2.svg";

const HeaderSection = () => {
  return (
    <HeaderBackground>
      <img src={logo2} alt="Logo" />
    </HeaderBackground>
  );
};

const HeaderBackground = styled.div`
  /* background-image: url("books.jpg"); */
  /* filter: blur(1px);
  filter: drop-shadow(10); */
  height: 20rem;
  width: 100%;
  display: flex;
  color: white;
  background: linear-gradient(
    60deg,
    #2b2e4a 0%,
    #2b2e4a 30%,
    #e84545 calc(30% + 1px),
    #e84545 60%,
    #903749 calc(60% + 1px),
    #903749 70%,
    #53354a calc(70% + 1px),
    #53354a 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);

  img {
    width: 10rem;
    height: 10rem;
    position: relative;
    top: 3rem;
    left: 3rem;
  }
`;

export default HeaderSection;
