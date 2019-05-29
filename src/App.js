import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

//location.pathname

const defaultComponent = ({ location }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <Main>
        <Nav />
        <Content location={location} />
      </Main>
    </>
  );
};

const generateRoutes = items => {
  return items.map(item => {
    if (item === "")
      return (
        <Route key="rootKey" exact path="/" component={defaultComponent} />
      );
    return <Route key={item} path={`/${item}`} component={defaultComponent} />;
  });
};

export default () => {
  return (
    <StoreProvider>
      <Router>{generateRoutes(routeItems)}</Router>
    </StoreProvider>
  );
};
