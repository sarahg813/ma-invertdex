import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
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
import configureStore from "../../redux/configureStore";
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

const store = configureStore();

function App(props) {
  useEffect(() => {
    store.dispatch(getStudios());
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <MainContainer />
        {props.location.pathname === "/" ? <Footer /> : null}
      </div>
    </Provider>
  );
}

export default withRouter(App);
