import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const tryLogin = (e) => {
    e.preventDefault();

    axios
      .post("users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("trackfit__token", res.data._id);
          history.push("/list");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //let autt =
    // auth.login(email, password);
    // console.log(autt);
  };

  return (
    <div>
      <div className="container">
        <h2> Login </h2>
        <form>
          <div className="form-group mt-4">
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" btn btn-dark btn-lg btn-block mt-4"
            onClick={tryLogin}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
