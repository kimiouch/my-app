import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div class="WeatherInfo">
 <div class="container searched">
        <div class="row">
          <div class="col" id="em">
            <h3 class="column-1">
              <span id="city">{props.data.city}</span>

              <br />

              <em id="time"> <FormatDate date={props.data.time}/> </em>

              <br />

              <span id="des"> {props.data.description} </span>
            </h3>
          </div>

          <div class="col">
            <div class="temratures">
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
          <div class="col">
           <WeatherIcon img={props.data.icon} />
          </div>
        </div>
      </div>
    </div>
    );
}