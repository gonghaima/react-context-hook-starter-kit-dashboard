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

const routeItems = [
  "",
  "all",
  "favorites",
  "administrator",
  "nonAdmins",
  "archived"
];

const generateRoutes = items => {
  return items.map(item => {
    if (item === "")
      return <Route exact path="/" component={defaultComponent} />;
    return <Route path={`/${item}`} component={defaultComponent} />;
  });
};

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
      <Router>{generateRoutes(routeItems)}</Router>
    </StoreProvider>
  );
};
