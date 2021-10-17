import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyNavBar from "./MyNavBar";

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("users")
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const storeExercise = (e) => {
    e.preventDefault();

    axios
      .post("exercises/add", {
        username: username,
        description: description,
        duration: Number(duration),
        date: Date(date),
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    setUsername("");
    setDescription("");
    setDuration("");
    setDate(new Date());
  };

  return (
    <div>
      <MyNavBar LoggedIn={true} />
      <div className="container">
        <h2> Record Exercises </h2>
        <form>
          <div className="form-group mt-4">
            <label>Username: </label>
            <select
              className="form-select"
              value={username}
              // onClick={updateUsersList()}
              onChange={(e) => setUsername(e.target.value)}
            >
              <option value="" disabled>
                Select a User
              </option>
              {users.map((us) => {
                return (
                  <option key={us._id} value={us.username}>
                    {us.username}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group mt-4">
            <label>Type of Exercise: </label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Duration of Exercise (in minutes): </label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Date: </label>
            <DatePicker
              className="form-control"
              format="dd/MM/y"
              selected={date}
              onChange={setDate}
            />
          </div>

          <button
            type="submit"
            className=" form-control btn btn-dark btn-lg btn-block mt-4"
            onClick={storeExercise}
          >
            Record Exercise{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateExercise;
