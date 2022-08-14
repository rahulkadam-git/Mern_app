import React, { useEffect } from "react";
import { loginSuccess } from "./redux/actions/auth.actions";
import "./style/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import ProtectedRoute from "./component/common/ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

import LandingPage from "./pages/Dashboard/LandingPage";

function App() {
  let user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      store.dispatch(loginSuccess(user));
    }
  }, [user]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/landingpage" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
