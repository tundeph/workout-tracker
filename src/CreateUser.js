import React, { useState } from "react";
import MyNavBar from "./MyNavBar";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const storeUsername = (e) => {
    e.preventDefault();
    axios
      .post("users/add", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    setUsername("");
  };

  return (
    <div>
      <MyNavBar LoggedIn={true} />
      <div className="container">
        <h2> Create New User </h2>
        <form>
          <div className="form-group mt-4">
            <label>Firstname: </label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className=" btn btn-dark btn-lg btn-block mt-4"
            onClick={storeUsername}
          >
            Save New User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
