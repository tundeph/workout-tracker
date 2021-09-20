import React from "react";
import "./Exercise.css";

function Exercise({ username, description, duration, date, id, onPress }) {
  var count = 0;
  return (
    <div
      className="exercise"
      onClick={() => {
        count = 1;
        console.log(count);
      }}
    >
      <div className="ex__box">
        <div className="ex__username">{username} </div>
        <div className=" ">
          {description} {duration + " mins"}
        </div>
        <button className="btn btn-md btn-block btn-dark" onClick={onPress}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Exercise;
