import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import { withRouter } from "react-router-dom";
import MyNavBar from "./MyNavBar";
import "./ExerciseList.css";

function ExercisesList() {
  const [listFigures, setListFigures] = useState([]);

  useEffect(() => {
    showExercises();
  }, []);

  const showExercises = () => {
    axios
      .get("exercises/", {})
      .then((res) => {
        setListFigures(res.data);
      })
      .catch((err) => console.log(err));
  };

  let running = 0;
  let swimming = 0;
  let walking = 0;
  let cycling = 0;
  let count = 1;
  const runningArray = [0];
  const swimmingArray = [0];
  const walkingArray = [0];
  const cyclingArray = [0];
  const labelsArray = [0];

  listFigures.forEach((data) => {
    labelsArray.push(count);
    count++;
    walking += data.walking;
    walkingArray.push(data.walking);
    running += data.running;
    runningArray.push(data.running);
    cycling += data.cycling;
    cyclingArray.push(data.cycling);
    swimming += data.swimming;
    swimmingArray.push(data.swimming);
  });

  const Chart = require("chart.js");
  const ctx = "myChart";
  // eslint-disable-next-line
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelsArray,
      datasets: [
        {
          label: "Walking",
          data: walkingArray,
          fill: false,
          pointRadius: 0,
          backgroundColor: "#f98806",
          borderColor: "#f98806",
          borderWidth: 2,
        },
        {
          label: "Cycling",
          data: cyclingArray,
          fill: false,
          pointRadius: 0,
          backgroundColor: "#9668f7",
          borderColor: "#9668f7",
          borderWidth: 2,
        },
        {
          label: "Running",
          data: runningArray,
          fill: false,
          pointRadius: 0,
          backgroundColor: "#72e294",
          borderColor: "#72e294",
          borderWidth: 2,
        },
        {
          label: "Swimming",
          data: swimmingArray,
          fill: false,
          pointRadius: 0,
          backgroundColor: "#98c5ff",
          borderColor: "#98c5ff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return (
    <div className="ExerciseList">
      <MyNavBar LoggedIn={true} />
      <div className="container">
        <h2> All Fitness Data </h2>
        <div className="col-md-4  mt-5">
          <select className="form-control">
            <option>All Time </option>
            <option>Custom Date </option>
          </select>
        </div>

        <canvas
          id="myChart"
          height="450"
          className=" white__box__graph mt-4"
        ></canvas>

        <div className="routine__div mt-5">
          <Exercise routine="Walking" duration={walking} />
          <Exercise routine="Cycling" duration={cycling} />
          <Exercise routine="Running" duration={running} />
          <Exercise routine="Swimming" duration={swimming} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ExercisesList);
