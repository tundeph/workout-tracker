import React from "react";
import "./Exercise.css";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PoolIcon from "@mui/icons-material/Pool";

function Exercise({ routine, duration }) {
  return (
    <div className="exercise">
      <div className="white__box">
        {(() => {
          if (routine.trim() === "Walking") {
            return (
              <div className="orange__color routine">
                <div>
                  <DirectionsWalkIcon fontSize="large" />
                </div>
                <div>
                  <h5> {routine} </h5>
                </div>
              </div>
            );
          } else if (routine.trim() === "Running") {
            return (
              <div className="green__color routine">
                <div>
                  <DirectionsRunIcon fontSize="large" />
                </div>
                <div>
                  <h5> {routine} </h5>
                </div>
              </div>
            );
          } else if (routine.trim() === "Cycling") {
            return (
              <div className="purple__color routine">
                <div>
                  <DirectionsBikeIcon fontSize="large" />
                </div>
                <div>
                  <h5> {routine} </h5>
                </div>
              </div>
            );
          } else if (routine.trim() === "Swimming") {
            return (
              <div className="blue__color routine">
                <div>
                  <PoolIcon fontSize="large" />
                </div>
                <div>
                  <h5> {routine} </h5>
                </div>
              </div>
            );
          }
        })()}
        <div className="duration">
          <div className="">
            <h1> {duration} </h1>
          </div>
          <div>
            <h4 className="light__gray__color ms-2"> Mins </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
