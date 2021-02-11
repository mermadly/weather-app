import React from 'react'
import {IDay} from '../../App'

type Props = {
forecast: IDay[]
}

const TinyCards: React.FC<Props> = ({ 
   forecast
  }) => {
    return (
        <div className="mt-12 flex flex-row flex-wrap md:flex-nowrap items-center">
            {forecast !== null && forecast.map(day => {
                return(
                    <>
                    <div className="border-2 rounded-lg mr-2 mt-2 md:p-2 border-red-100 last:mr-0">
                    <div className="text-center">{day.date}</div>
                    <img  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}></img>
                    <div className="text-center"><span>{day.tempMax}°</span> / {day.tempMin}°</div>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default TinyCards
