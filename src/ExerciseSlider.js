import React from "react";
import "./ExerciseSlider.css";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PoolIcon from "@mui/icons-material/Pool";
import Slider from "@mui/material/Slider";

function ExerciseSlider({ routine, mins, setVal }) {
  const allRoutines = {
    walking: {
      icon: <DirectionsWalkIcon fontSize="large" />,
      color: "orange__color",
    },
    running: {
      icon: <DirectionsRunIcon fontSize="large" />,
      color: "green__color",
    },
    cycling: {
      icon: <DirectionsBikeIcon fontSize="large" />,
      color: "purple__color",
    },
    swimming: {
      icon: <PoolIcon fontSize="large" />,
      color: "blue__color",
    },
  };

  return (
    <div className="exercise__box mt-5">
      <div className={allRoutines[routine].color}>
        {allRoutines[routine].icon}
      </div>
      <div>
        <h3>{routine.charAt(0).toUpperCase() + routine.slice(1)}</h3>
      </div>

      <Slider
        className={allRoutines[routine].color}
        aria-label="Routine"
        defaultValue={null}
        getAriaValueText={setVal}
        color="secondary"
        max={300}
      />

      <div className="time__container">
        <div>
          {/* <input
            type="number"
            className=""
            key={routine}
            onChange={setVal}
            value={mins}
          /> */}
          <h1> {mins}</h1>
        </div>
        <div>
          <h4 className="light__gray__color ms-2"> Mins </h4>
        </div>
      </div>
    </div>
  );
}

export default ExerciseSlider;
