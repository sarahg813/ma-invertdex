import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/authActions";
import RegisterModal from "./components/auth/RegisterModal";
import Logout from "./components/auth/Logout";
import LoginModal from "./components/auth/LoginModal";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <p>Hello</p>
        <RegisterModal />
        <Logout />
        <LoginModal />
      </div>
    </Provider>
  );
}

export default App;
