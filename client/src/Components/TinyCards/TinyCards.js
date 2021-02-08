import React from 'react'

const TinyCards = (props) => {
    const {forecast} = props
 console.log(forecast)
    return (
        <div>
            {forecast !== [] && forecast.map(day => {
                return(
                    <>
                    <div>{day.date}</div>
                    <img src={`http://openweathermap.org/img/wn/${day.icon}.png`}></img>
                    <div><span>{day.tempMax}°</span>/ {day.tempMin}°</div>
                    </>
                )
            })}
        </div>
    )
}

export default TinyCards
