import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ExercisesList() {
  const [listExercises, setListExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/", {})
      .then((res) => setListExercises(res.data))
      .catch((err) => console.log(err));
  });

  const deleteExercise = (id) => {
    axios
      .delete("localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // console.log(id);
  };

  return (
    <div>
      <h2> Exercises Dashboard </h2>
      <div>
        {listExercises.map((data) => {
          return (
            <div className="flex" key={data._id}>
              <div> {data._id} </div>
              <div> {data.username} </div>
              <div> {data.description} </div>
              <div> {data.duration} </div>
              <div> {Date.parse(data.date)} </div>
              <div>
                <Link to="" onClick={() => deleteExercise(data._id)}>
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExercisesList;
