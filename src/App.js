import React, { useState } from "react";
import styled from "styled-components";

//Components
import AddNewButton from "./components/AddNewButton";
import PopupSection from "./components/PopupSection";
import BooklistSection from "./components/BooklistSection";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

//Book List
import data from "./data";

function App() {
  const [modifying, setModifying] = useState(false);
  const [addingNew, setAddingNew] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [currentBookList, setCurrentBookList] = useState(data());

  return (
    <AppStyle>
      <HeaderSection />
      <main>
        <BooklistSection
          setModifying={setModifying}
          setCurrentBook={setCurrentBook}
          currentBookList={currentBookList}
          setCurrentBookList={setCurrentBookList}
        />
        {(modifying || addingNew) && (
          <PopupSection
            setModifying={setModifying}
            setAddingNew={setAddingNew}
            currentBook={currentBook}
            setCurrentBook={setCurrentBook}
            currentBookList={currentBookList}
            setCurrentBookList={setCurrentBookList}
          />
        )}
        <AddNewButton setAddingNew={setAddingNew} />
      </main>
      <FooterSection />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 100%;

  main {
    display: flex;
    padding: 3rem;
    padding-bottom: 7rem;
    /* margin-top: -5rem; */
    @media screen and (max-width: 700px) {
      padding: 1rem;
    }
  }
`;

export default App;
