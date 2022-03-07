import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
 <div className="container searched">
        <div className="row">
          <div className="col" id="em">
            <h3 className="column-1">
              <span id="city">{props.data.city}</span>

              <br />

              <em id="time"> <FormatDate date={props.data.time}/> </em>

              <br />

              <span id="des"> {props.data.description} </span>
            </h3>
          </div>

          <div className="col">
            <div className="temratures">
              <em>
                <span id="temp"><WeatherTemp celsius={props.data.temp}/></span>
                <span id="celsius" ></span>
                <br />
                Humidity: <span id="humid">{props.data.humidity}</span> %💧
                <br />
                Wind: <span id="wind">{props.data.wind}</span> km/h🌬
                <br />
              </em>
            </div>
          </div>
          <div className="col">
           <WeatherIcon img={props.data.icon} />
          </div>
        </div>
      </div>
    </div>
    );
}