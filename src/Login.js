import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Login.css";
import axios from "axios";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("trackfit__token");
    if (token !== null) {
      history.push("/list");
    }
  }, []);
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
      <div className=" flex__container">
        {/* Left Side Div */}
        <div className="home__container">
          <img
            className="login__logo"
            src="trackfit-logo.png"
            alt="TrackFit logo"
          />
          <h2>
            Measuring the world’s <br /> fitness routine
          </h2>

          <img
            className="landing__pic"
            src="landing-page-1.svg"
            alt="Fitness Measurement"
          />
        </div>

        {/* Right Side Div */}
        <div className="login__container">
          <div className="login__container__inner">
            <form>
              <div className="form-group mt-4 form__div">
                <PermIdentityOutlinedIcon fontSize="large" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mt-4 form__div">
                <LockOutlinedIcon fontSize="large" />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-4 form__div">
                <div></div>
                <button
                  type="submit"
                  className=" btn red__button"
                  onClick={tryLogin}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
