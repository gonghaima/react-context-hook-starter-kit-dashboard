import React from "react";
// Global Store
import Store from "./store";

// Load components
import Form from "./components/Form";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";

export default () => {
  return (
    <Store>
      <Header />
      <SubHeader />
      <Main>
        <div>Nav components</div>
        <Form />
      </Main>
    </Store>
  );
};
