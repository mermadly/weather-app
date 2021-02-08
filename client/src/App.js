  import React, { useState, useEffect } from 'react';
  import Card from './Components/Card/Card'
  import Select from './Components/Select/Select'
  import TinyCards from './Components/TinyCards/TinyCards'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

  const App = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [weather, setWeather] = useState({})
    const [forecast, setForecast] = useState([])

  
    const fetchCurrentLocation = async () => {
      let url = "http://ip-api.com/json/";
  
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data)
      setCurrentLocation(data.city);
    };
  
    
  const fetchWeather = async () => {
    if (currentLocation === "") return
    
    let url = `http://localhost:8080/current/${currentLocation}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    setWeather(data);
  };

      
  const fetchForecast = async () => {
    if (currentLocation === "") return
    
    let url = `http://localhost:8080/forecast/${currentLocation}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    setForecast(data);
  };

  
   useEffect(() => {
     fetchCurrentLocation()
   }, [])
  
   useEffect(() => {
    fetchWeather()
    fetchForecast()
  }, [currentLocation])

  console.log(currentLocation)

  const handleSubmit = (e) => {
    setCurrentLocation(e.target.value)
  }

    return (
      <div>
        {weather !== {} &&
        <>
        <FontAwesomeIcon onClick={fetchCurrentLocation} icon={faMapMarkerAlt} size="2x" color="#c94972"/>
        <Select handleSubmit={handleSubmit}/>
        <Card weather={weather} location={currentLocation}/>
        <TinyCards forecast={forecast}/>
        </>
        }
      </div>
    )
  }
  
  export default App
  