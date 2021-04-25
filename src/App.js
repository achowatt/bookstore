import React, { useState } from "react";
import styled from "styled-components";

//Components
import AddNewButton from "./components/AddNewButton";
import PopupSection from "./components/PopupSection";
import BooklistSection from "./components/BooklistSection";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [currentBookID, setCurrentBookID] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [footerShowing, setFooterShowing] = useState(false);

  return (
    <AppStyle>
      <HeaderSection />
      <main>
        <BooklistSection
          setPopupOpen={setPopupOpen}
          setCurrentBookID={setCurrentBookID}
        />
        {popupOpen && (
          <PopupSection
            currentBookID={currentBookID}
            setCurrentBookID={setCurrentBookID}
            setPopupOpen={setPopupOpen}
          />
        )}
        <AddNewButton
          footerShowing={footerShowing}
          setPopupOpen={setPopupOpen}
        />
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
      padding-bottom: 4.5rem;
    }
  }
`;

export default App;
