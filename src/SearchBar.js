import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <form id="search-bar">
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
