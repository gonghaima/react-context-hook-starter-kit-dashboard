import React from "react";
// Global Store
import Store from "./store";

// Load components
import Form from "./components/Form";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

export default () => {
  return (
    <Store>
      <Header />
      <SubHeader />
      <div className="App">
        <Form />
      </div>
    </Store>
  );
};
