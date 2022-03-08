import React from "react";


export default function ForecastDay(props){
  
    function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }



    function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

    
    return (

        <div className="ForecastDay">    
              <div className="forecast-date"> {day()} </div>
              <img
                src=""
                alt=""
                className="forecast-icon"
              />
                <div className="forecast-temp">
                <span className="forecast-temp-max">{maxTemp()}</span>
                <span className="forecast-temp-min">{minTemp()} </span>
              </div>
</div>
 
    )
}