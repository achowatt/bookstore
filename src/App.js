import React from "react";
import styled from "styled-components";

//Components
import AddNewButton from "./components/AddNewButton";
import PopupSection from "./components/PopupSection";
import BooklistSection from "./components/BooklistSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <AppStyle>
      <HeaderSection />
      <main>
        <BooklistSection />
        <PopupSection />
        <AddNewButton />
      </main>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 100%;
`;

export default App;
