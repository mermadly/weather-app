import React from 'react'

const Card = (props) => {
    const {weather, location} = props
    
    return (
        <div>
            <h3>{location}</h3>
            <h2>{weather.temp}°</h2>
            <p>{weather.weatherDescription}</p>
            <p>Feels like {weather.feelsLike}°</p>
            <p><span>{weather.tempMax}°</span>/ {weather.tempMin}°</p>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
        </div>
    )
}

export default Card
