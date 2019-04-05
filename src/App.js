import React from "react";
// Global Store
import { StoreProvider } from "./store";

// Load components
import Content from "./components/Content";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default () => {
  return (
    <StoreProvider>
      <Header />
      <SubHeader />
      <Main>
        <Nav />
        <Content />
      </Main>
    </StoreProvider>
  );
};
