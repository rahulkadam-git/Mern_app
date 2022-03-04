import React, { useEffect } from "react";
import { loginSuccess } from "./redux/actions/auth.actions";
import "./style/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ShowUser from "./component/User/ShowUser";
import Flower from "./component/flower/Flower";
import UserDetailsPg from "./component/User/UserDetailsPg";
import ProtectedRoute from "./component/common/ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ToastContainer } from "react-toastify";

function App() {
  let user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      console.log(user);
      store.dispatch(loginSuccess(user));
    }
  }, [user]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/flower" component={Flower} />
          <Route path="/showuser" component={ShowUser} />
          <Route path="/userdetails/:_id" component={UserDetailsPg} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
