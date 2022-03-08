import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c403a9e2a5c07086f36f15c109e2369a";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
   axios.get(apiUrl).then(handleResponse);
  
  return (
    <div className="Forecast">
        <h1 className="nexts">
        <img src="./icons/triangle.png" width="30px" alt="" />
        NEXT DAYS
      </h1>

      <div className="frame">
        <div className="container" id="forecast">
          <div className="row">
            <div className="col ">
              <div className="forecast-date"> </div>
              <img
                src=""
                alt=""
                className="forecast-icon"
              />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> 10° </span>
                <span className="forecast-temp-min"> 12° </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
