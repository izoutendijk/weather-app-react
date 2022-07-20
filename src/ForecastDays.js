import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastDays(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "CLOUDY_DAY",
    "02n": "CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <div className="row align-items-center forecastEl">
      <div className="col-2 day">{props.day}</div>
      <div className="col-1 weather">
        <ReactAnimatedWeather
          icon={iconMapping[props.icon]}
          color="#dfb228"
          size={30}
          animate="true"
        />
      </div>
      <div className="col-2 tempMinMax">
        <span id="min-value">
          Min: {props.minValue}º{props.unit}
        </span>
        <br />
        <span id="max-value">
          Max: {props.maxValue}º{props.unit}
        </span>
      </div>
      <div className="col-6 description">{props.description}</div>
    </div>
  );
}
