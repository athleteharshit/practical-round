import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import store from "./redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const authentication = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  getLogInStatus() {
    return this.isLoggedIn;
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <div>
            <Navbar />
            <Route exact path="/">
              <Login auth={authentication} />
            </Route>
            <ProtectedRoutes
              auth={authentication}
              path="/home"
              component={Home}
            />
          </div>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
