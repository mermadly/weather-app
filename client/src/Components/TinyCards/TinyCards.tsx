import React, {Fragment} from 'react'
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
                    <Fragment key={day.date} >
                    <div className="border-2 rounded-lg mr-2 mt-2 md:p-2 border-red-100 last:mr-0">
                    <div className="text-center">{day.date}</div>
                    <img  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="Weather icon"></img>
                    <div data-testid="temps" className="text-center">{day.tempMax}°/ {day.tempMin}°</div>
                    </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default TinyCards
