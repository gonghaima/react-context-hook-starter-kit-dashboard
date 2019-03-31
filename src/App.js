import React from "react";
// Global Store
import Store from "./store";

// Load components
// import Form from "./components/Form";
import Content from "./components/Content";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default () => {
  return (
    <Store>
      <Header />
      <SubHeader />
      <Main>
        <Nav />
        <Content />
      </Main>
    </Store>
  );
};
