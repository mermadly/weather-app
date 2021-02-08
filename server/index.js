const express = require('express')
const app = express()
const cors = require("cors");
const fetch = require("node-fetch");
const tools = require('./utils/utils')

app.use(cors());
app.use(express.json());

const apiKey = "49866814f22224b3a5a22e274ac8d7d8"

const originalEndpoints = {
    current: location => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
    forecast: (lon, lat) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`
};


app.get('/v1', (req, res) =>{
    res.send('Base')
})


app.get('/current/:id', async (req, res) => {
    const city = req.params.id;

    if (city === undefined) {
        res.send('Error, la ubicación no fue definida')
    } else {
        
    const data = await tools.fetchLocation(city, originalEndpoints)
    
    const filteredData = {
        temp: tools.calculateCels(data.main.temp),
        tempMax: tools.calculateCels(data.main.temp_max),
        tempMin: tools.calculateCels(data.main.temp_min),
        feelsLike: tools.calculateCels(data.main.feels_like),
        humidity: data.humidity,
        weather: data.weather[0].main,
        weatherDescription: data.weather[0].description,
        icon: data.weather[0].icon
    }

    console.log("filtered",filteredData.weatherDescription)
    res.json(filteredData)
  }
    
})


app.get('/forecast/:id', async (req, res) => {
  const city = req.params.id;

  if (city === undefined) {
      res.send('Error, la ubicación no fue definida')
  } else {
    const data = await tools.fetchLocation(city, originalEndpoints)

    const lon = data.coord.lon
    const lat = data.coord.lat 

    const fetchDaily = async (city, endpoints) => {
      const url = originalEndpoints.forecast(lon, lat)
      try {
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            return data;
          } catch (error) {
            console.log("error", error.message);
          }
    }

  const dataDaily = await fetchDaily();
  const dailyArray = dataDaily.daily

  const finalArray = []

  for (i = 0; i < 5; i++) {
    const dailyDate = new Date(dailyArray[i].dt * 1000);
    const dateString = dailyDate.toDateString().slice(0,-5);
    const comma = ","
    const position = 3
    const finalDate = [dateString.slice(0, position), comma, dateString.slice(position)].join('')


    finalArray.push({date: finalDate, tempMin: tools.calculateCels(dailyArray[i].temp.min), tempMax: tools.calculateCels(dailyArray[i].temp.max), icon: dailyArray[i].weather[0].icon})
  }
  
  res.json(finalArray)

}
})

app.listen(8080, () => console.log('Listening on port 8080...'))
