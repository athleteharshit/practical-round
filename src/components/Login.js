import { useState } from "react";
import { useHistory } from "react-router-dom";
import data from "../user.json";




const Login = ({auth}) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChangeEvent = (event) => {
    if (event.target.type === "email") {
      setForm({
        ...form,
        email: event.target.value,
      });
    } else if (event.target.type === "password") {
      setForm({
        ...form,
        password: event.target.value,
      });
    } else {
      setForm(form);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(auth);
    for (let item of data) {
      if(form.email === item.email && form.password === item.password) {
        auth.onAuthentication();
        history.push("/home");
        return;
      }
    }
    alert("Password and Email wrong");
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Welcome Back</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChangeEvent}
            value={form.email}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChangeEvent}
            value={form.password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ textAlign: "center" }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
