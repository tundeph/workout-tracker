import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");

  const storeUsername = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/add", { username: username })
      .then((res) => alert(res.data))
      .catch((err) => {
        console.log(err);
      });

    // console.log(username);
    setUsername("");
  };

  return (
    <div>
      <h2> Create New User </h2>
      <form>
        <div className="form-group mt-4">
          <label>Full Name: </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
  );
}

export default CreateUser;
