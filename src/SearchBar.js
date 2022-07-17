import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";

export default function SearchBar() {
  let [city, setCity] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleWeather(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a68381d4faf2a13b11b7dc8945964fc7&units=metric`;
      axios.get(url).then(handleWeather);
    } else {
      alert("Enter a city please!");
    }
  }

  return (
    <div className="searchBar">
      <form id="search-bar" onSubmit={handleSubmit}>
        <div className="row g-3 inputCityBar">
          <div className="col-auto">
            <i className="fa-solid fa-magnifying-glass" id="searchButton"></i>
          </div>
          <div className="col-auto">
            <input
              type="search"
              id="inputCity"
              className="form-control"
              placeholder="Enter a city here"
              autoFocus="on"
              onChange={changeCity}
            />
          </div>
        </div>
      </form>
      <button type="button" className="btn btn-link currentLoc">
        Current Location
      </button>
      <div className="tempCurrent">
        <span className="tempValue"></span>
        <span id="units"></span>
      </div>
    </div>
  );
}
