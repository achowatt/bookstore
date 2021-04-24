import React, { useState } from "react";
import styled from "styled-components";

//Components
import AddNewButton from "./components/AddNewButton";
import PopupSection from "./components/PopupSection";
import BooklistSection from "./components/BooklistSection";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

//REDUX
import { useSelector } from "react-redux";

function App() {
  const [currentBook, setCurrentBook] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [footerShowing, setFooterShowing] = useState(false);

  //AddingNew
  const addingNew = useSelector((state) => state.addingNew);
  const modifying = useSelector((state) => state.modifying);

  return (
    <AppStyle>
      <HeaderSection />
      <main>
        <BooklistSection setCurrentBook={setCurrentBook} />
        {(modifying || addingNew) && (
          <PopupSection
            currentBook={currentBook}
            setCurrentBook={setCurrentBook}
          />
        )}
        <AddNewButton footerShowing={footerShowing} />
      </main>
      <FooterSection setFooterShowing={setFooterShowing} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 100%;

  main {
    display: flex;
    padding: 3rem;
    padding-bottom: 7rem;
    position: relative;
    min-height: calc(100vh - 40rem);
    @media screen and (max-width: 700px) {
      padding: 1rem;
      padding-bottom: 2.5rem;
    }
  }
`;

export default App;
