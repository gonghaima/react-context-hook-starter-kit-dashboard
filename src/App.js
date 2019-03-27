import React from "react";
// Global Store
import Store from "./store";

// Load components
import Form from "./components/Form";

export default () => {
  return (
    <Store>
      <div className="App">
        <Form />
      </div>
    </Store>
  );
};
