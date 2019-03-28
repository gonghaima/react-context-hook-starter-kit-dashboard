import React from "react";
// Global Store
import Store from "./store";

// Load components
import Form from "./components/Form";
import Header from "./components/Header";

export default () => {
  return (
    <Store>
      <Header />
      <div className="App">
        <Form />
      </div>
    </Store>
  );
};
