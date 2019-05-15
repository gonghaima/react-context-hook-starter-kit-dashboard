import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navlink
} from "react-router-dom";
// Global Store
import { StoreProvider } from "./store";

// Load components
import Content from "./components/Content";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import Nav from "./components/Nav";

const defaultComponent = () => (
  <>
    <Header />
    <SubHeader />
    <Main>
      <Nav />
      <Content />
    </Main>
  </>
);

export default () => {
  return (
    <StoreProvider>
      <Router>
        <Route exact path="/" component={defaultComponent} />
        <Route path="/all" component={defaultComponent} />
        <Route path="/favorites" component={defaultComponent} />
        <Route path="/administrator" component={defaultComponent} />
        <Route path="/nonAdmins" component={defaultComponent} />
        <Route path="/archived" component={defaultComponent} />
      </Router>
    </StoreProvider>
  );
};
