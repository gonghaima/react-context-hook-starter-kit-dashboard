import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Global Store
import { StoreProvider, StoreContext } from "./store";

// Load components
import Content from "./components/Content";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import renderNav from "./components/Nav";

const routeItems = [
  "",
  "all",
  "favorites",
  "administrator",
  "nonAdmins",
  "archived"
];

const defaultComponent = ({ history }) => {
  history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
    const [, dispatch] = React.useContext(StoreContext);
    dispatch({
      type: "setFilter",
      payload: location.pathname
    });
  });
  return (
    <>
      <Header />
      <SubHeader />
      <Main>
        {renderNav(history)}
        <Content />
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
