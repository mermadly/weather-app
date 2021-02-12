import React from "react";
import {IWeather} from '../../App'

type Props = {
  hasWeather: boolean,
  weather:  IWeather,
  location: string
}

const Card: React.FC<Props> = ({ 
  hasWeather,
  weather,
  location
}) => {
  return (
    <div className="mt-12 bg-red-200  p-4 md:p-6 rounded-2xl container flex flex-row justify-between align-center">
      <div className="w-52 md:w-72">
        <h3 className="md:text-3xl">{location}</h3>
        <div className="container mt-4 flex flex-row justify-start align-center">
          <h2 className="text-5xl md:text-7xl">{weather.temp}°</h2>
          <div className="ml-4 md:ml-8 md:text-xl">
          <p className="md:mt-2">{weather.weatherDescription}</p>
          <p className="md:mt-2">Feels like {weather.feelsLike}°</p>
          </div>
        </div>
        <p className="mt-2 md:mt-6 md:text-xl">
          <span>Max {weather.tempMax}°</span> - Min {weather.tempMin}°
        </p>
      </div>
      <img className="md:w-44" alt="Today's weather icon"
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      ></img>
    </div>
  );
};

export default Card;
