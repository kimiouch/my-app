import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay"

export default function Forecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(()  => {
    setLoaded(false);
  },[props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
    return (
       <div className="Forecast">
        <div className="container" id="forecast">
          <div className="row">
          
            {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
          </div>
        </div>
     
    </div>
      
        
    );
  } else {

    let apiKey = "c403a9e2a5c07086f36f15c109e2369a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
   axios.get(apiUrl).then(handleResponse);
  
  }
  return null;
}
