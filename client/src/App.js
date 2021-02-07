  import React, { useState, useEffect } from 'react';
  import Card from './Components/Card/Card'
  import Select from './Components/Select/Select'

  const App = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [forecast, setForecast] = useState({})
  
    const fetchCurrentLocation = async () => {
      let url = "http://ip-api.com/json/";
  
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data)
      setCurrentLocation(data.city);
    };
  
    
  const fetchForecast = async () => {
    if (currentLocation === "") return
    
    let url = `http://localhost:8080/current?q=${currentLocation}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    setForecast(data);
  };
    console.log("forecast", forecast)
  
   useEffect(() => {
     fetchCurrentLocation()
   }, [])
  
   useEffect(() => {
    fetchForecast()
  }, [currentLocation])

  console.log(currentLocation)

  const handleSubmit = (e) => {
    setCurrentLocation(e.target.value)
  }

    return (
      <div>
        {forecast !== {} &&
        <>
        <button onClick={fetchCurrentLocation}>Current</button>
        <Select handleSubmit={handleSubmit}/>
        <Card forecastData={forecast} location={currentLocation}/>
        </>
        }
      </div>
    )
  }
  
  export default App
  