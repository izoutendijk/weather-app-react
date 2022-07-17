import React from "react";
import "./Weather.css";

import Date from "./Date";
import TempButton from "./TempButton";
import SearchBar from "./SearchBar";
import TempCurrent from "./TempCurrent";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <Date day="Saturday" hour={18} minutes="00" />
      <TempButton />
      <SearchBar />
      <TempCurrent />
      <CurrentCity />
      <Forecast />
    </div>
  );
}
