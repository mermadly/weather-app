import React from 'react'

const Card = (props) => {
    const {forecastData, location} = props
    
    return (
        <div>
            <h3>{location}</h3>
            <h2>{forecastData.temp}°</h2>
            <p>{forecastData.weatherDescription}</p>
            <p>Feels like {forecastData.feelsLike}°</p>
            <p><span>{forecastData.tempMax}°</span>/ {forecastData.tempMin}°</p>
            <img src={`http://openweathermap.org/img/wn/${forecastData.icon}@2x.png`}></img>
        </div>
    )
}

export default Card
