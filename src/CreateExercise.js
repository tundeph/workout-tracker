import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  //   console.log([username, description, duration, date]);

  const storeExercise = (e) => {
    e.preventDefault();
    console.log([username, description, duration, date]);
    setDescription("");
  };

  return (
    <div>
      <h2> Record Exercises </h2>
      <form>
        <div className="form-group mt-4">
          <label>Username: </label>
          <select
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {<option>test user 1</option>}
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
  );
}

export default CreateExercise;
