import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import store from "./redux/store";
import { getStudios } from "./redux/actions/studiosActions";
import { loadUser } from "./redux/actions/authActions";
import NavbarComp from "./components/NavbarComp";
import MainContainer from "./components/MainContainer";

library.add(fab, faMapMarkerAlt, faPhoneAlt, faLink, faEnvelope);

export default function App() {
  useEffect(() => {
    store.dispatch(getStudios());
    store.dispatch(loadUser());
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
