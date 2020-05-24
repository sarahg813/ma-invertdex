import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBackspace,
  faMapMarkerAlt,
  faPhoneAlt,
  faLink,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import store from "../../redux/store";
import { getStudios } from "../../redux/actions/studiosActions";
import { loadUser } from "../../redux/actions/authActions";
import NavBar from "../NavBar";
import MainContainer from "../MainContainer";
import Footer from "../Footer";

library.add(
  fab,
  faBackspace,
  faMapMarkerAlt,
  faPhoneAlt,
  faLink,
  faEnvelope,
  faSearch
);

export default function App() {
  useEffect(() => {
    store.dispatch(getStudios());
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <MainContainer />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
