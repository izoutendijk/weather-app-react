import React from "react";
import "./Date.css";

export default function Date(props) {
  return (
    <div className="date">
      {props.day}, {props.hour}:{props.minutes}
    </div>
  );
}
