  import React, { useState, useEffect } from 'react';

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
    console.log("currentLocation fetch", currentLocation)
    let url = `http://localhost:8080/current?q=${currentLocation}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    setForecast(data);
  };

    console.log(currentLocation)
    console.log(forecast)
  
   useEffect(() => {
     fetchCurrentLocation()
   }, [])
  
   useEffect(() => {
    fetchForecast()
  }, [currentLocation])

    return (
      <div>
        
      </div>
    )
  }
  
  export default App
  