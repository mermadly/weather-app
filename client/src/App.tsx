  import React, { useState, useEffect } from 'react';
  import Card from './Components/Card/Card'
  import Select from './Components/Select/Select'
  import TinyCards from './Components/TinyCards/TinyCards'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

  export interface IWeather {
    temp: number,
      tempMin: number,
      tempMax: number,
      feelsLike: number,
      weatherDescription:string,
      icon: string
  }

export  interface IDay {
    date: string,
    icon: string,
    tempMax: number,
    tempMin: number
   }
   
  const App: React.FC = ({}) => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [weather, setWeather] = useState<IWeather | null>(null)
    const [forecast, setForecast] = useState<IDay[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

  
    const fetchCurrentLocation = async () => {
      let url = "http://ip-api.com/json/";
  
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data)
      setCurrentLocation(data.city);
    };
  
    
  const fetchWeather = async () => {
    if (currentLocation === "") return
    const url = `http://localhost:8080/current/${currentLocation}`;

    try {
      const respuesta = await fetch(url)
      const data = await respuesta.json();
      setWeather(data)
     } catch (error) {
       setError(error.message)
     }
    
  };

      
  const fetchForecast = async () => {
    if (currentLocation === "") return
    let url = `http://localhost:8080/forecast/${currentLocation}`;

    try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setForecast(data);
     } catch (error) {
       setError(error.message)
     }
    

  };
  
   useEffect(() => {
     fetchCurrentLocation()
   }, [])
   
  
   useEffect(() => {
     if (currentLocation !== "") {
    setLoading(true)
    const fetch = async () => { 
    await fetchWeather()
    await fetchForecast()
    }
    
    fetch()
  
    setLoading(false)
  }
  }, [currentLocation])


  const handleSubmit = (value : string) => {
    setCurrentLocation(value)
  }

    return (
      <div className="md:w-1/3 m-8 text-gray-700">
        {weather !== null &&
        <>
        <div className="flex flex-row justify-between align-center">
        <FontAwesomeIcon onClick={fetchCurrentLocation} icon={faMapMarkerAlt} size="2x" className="md:text-4xl" color="#dc2626"/>
        <Select onSubmit={handleSubmit}/>
        </div>
        <Card weather={weather} location={currentLocation}/>
        <TinyCards forecast={forecast}/>
        </>
        }
      </div>
    )
  }
  
  export default App
  