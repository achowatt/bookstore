import React, { useEffect } from "react";
import styled from "styled-components";
import Logo2 from "../Logo2.svg";

import { useInView } from "react-intersection-observer";

const FooterSection = ({ setFooterShowing }) => {
  const [element, view] = useInView({ threshold: 0 });

  useEffect(() => {
    setFooterShowing(view);
  }, [setFooterShowing, view]);

  return (
    <Footer ref={element}>
      <img src={Logo2} alt="Built and Designed by Anna Chowattanakul" />
    </Footer>
  );
};

const Footer = styled.footer`
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
  color: #fffffff2;
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
  clip-path: polygon(0 0, 100% 35%, 100% 100%, 0 100%);

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }
`;

export default FooterSection;
