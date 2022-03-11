import React from "react";

export default function WeatherIcon(props) {
const icons = {

    "01d": "./icons/day/clearday.png",
    "02d": "./icons/day/fewclouds.png",
    "03d": "./icons/cloud.png",
    "04d": "./icons/manyclouds.png",
    "09d": "./icons/showerrain.png",
    "10d": "./icons/day/rainyday.png",
    "11d": "./icons/thunder.png",
    "13d": "./icons/snowy.png",
    "50d": "./icons/day/mistday.png",


    "01n": "./icons/night/clearnight.png",
    "02n": "./icons/night/fewclouds.png",
    "03n": "./icons/cloud.png",
    "04n": "./icons/manyclouds.png",
    "09n": "./icons/showerrain.png",
    "10n": "./icons/night/rainynight.png",
    "11n": "./icons/thunder.png",
    "13n": "./icons/snowy.png",
    "50n": "./icons/night/mistnight.png",

}

    return(
    <img src={icons[props.img]} className={props.className} alt="" />

    );
}