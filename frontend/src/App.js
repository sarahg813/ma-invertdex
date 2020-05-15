import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getStudios } from "./redux/actions/studiosActions";
// import { loadUser } from "./redux/actions/authActions";
import NavbarComp from "./components/NavbarComp";
import MainContainer from "./components/MainContainer";

export default function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  useEffect(() => {
    store.dispatch(getStudios());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavbarComp />
          <MainContainer />
        </div>
      </Router>
    </Provider>
  );
}
