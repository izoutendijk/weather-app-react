import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";

export default function SearchBar(props) {
  let apiKey = "a68381d4faf2a13b11b7dc8945964fc7";
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleWeather);
    } else {
      alert("Enter a city please!");
    }
  }

  if (weatherData.ready) {
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
  } else {
    search();
    return "Loading.....";
  }
}
