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
    forecast: location => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
};


app.get('/v1', (req, res) =>{
    res.send('Base')
})


app.get('/current', async (req, res) =>{
    const query = req.query.q;
    console.log("query",query)
    const url = originalEndpoints.current(query)
    console.log("url", url)

    if (query === undefined) {
        res.send('Error, la ubicación no fue definida')
    } else {
        const fetchData = async () => {
        try {
          const respuesta = await fetch(url);
          const data = await respuesta.json();
          return data;
        } catch (error) {
          console.log("error", error.message);
        }
      };

    const data = await fetchData();
    console.log(data)
    
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
    res.json(filteredData)}
    
})


app.listen(8080, () => console.log('Listening on port 8080...'))