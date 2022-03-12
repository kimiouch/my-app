import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
 <div className="container">
        <div className="row">

          <div className="col" id="em">
            <div className="column-1">
              <span id="city">{props.data.city}</span>
              
              <br />
              
              <span id="time"> <FormatDate date={props.data.time}/> </span>
              <span id="des"> {props.data.description} </span>
            </div>
          </div>

          <div className="col">
            <div className="temratures">
              
                <span id="temp"> <WeatherTemp celsius={props.data.temp}/></span>
                <span id="celsius" ></span>
                Humidity: <span id="humid">{props.data.humidity}</span> %
                <br />
                Wind: <span id="wind">{props.data.wind}</span> km/h
                <br />
            
            </div>
          </div>
          <div className="col">
           <WeatherIcon img={props.data.icon} className="main-icon" />
          </div>
        </div>
      </div>
    </div>
    );
}
