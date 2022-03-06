import React, {useState} from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event){
    event.prevantDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event){
    event.prevantDefault();
    setUnit("celsius");
  }

  if (unit === "celcius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        °C|{""}
         <a href="/" onClick={convertFahrenheit}>
         °F
         </a>
      </span>
    </div>
  );
} else {
  let fahrenheit = (props.celsius * 9/5) + 32;
  return (
    <div className="WeatherTemperature">
       <span className="temperature">{Math.round(fahrenheit)}</span>
      <span className="unit">
       <a href="/" onClick={convertCelsius}>
         °C
       </a>{""}
       |°F
       </span>
    </div>
 
  )
}
}