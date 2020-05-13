import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getStudios } from "./redux/actions/studioActions";
// import { loadUser } from "./redux/actions/authActions";
import AdminPage from "./components/AdminPage";

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  useEffect(() => {
    store.dispatch(getStudios());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AdminPage />
      </div>
    </Provider>
  );
}

export default App;
