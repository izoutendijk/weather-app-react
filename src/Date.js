import React from "react";
import "./Date.css";

export default function Date(props) {
  let date = props.date;
  let newDate = new Date();
  // let newDate = new Date(1658171522000);
  console.log(date);
  console.log(newDate);
  return (
    <div className="date">
      {props.day}, {props.hour}:{props.minutes}
    </div>
  );
}
