import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = (props) => (
  <Route
    path={props.path}
    render={(data) =>
      props.auth.getLogInStatus() ? (
        <props.component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default ProtectedRoutes;
