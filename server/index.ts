import express from 'express'
const app = express()
const cors = require("cors");
const fetch = require("node-fetch");
const tools = require('./utils/utils')

app.use(cors());
app.use(express.json());

const apiKey: string = "49866814f22224b3a5a22e274ac8d7d8"

interface IFilteredData {
  temp: number,
  tempMin: number,
  tempMax: number,
  feelsLike: number,
  weatherDescription: string,
  icon: string
}

interface IDailyForecast {
  date: string,
  tempMin: number,
  tempMax: number,
  icon:string
}


const originalEndpoints = {
  current: (location: string) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
  forecast: (lon: string, lat: string) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`
};



app.get('/v1', (req, res) => {
  res.send('Base')
})

app.get('/current/:id', async (req, res) => {
  const city: string = req.params.id;

  if (city === undefined) {
    res.send('Error, la ubicación no fue definida')
  } else {

    const data = await tools.fetchLocation(city, originalEndpoints)

    const filteredData: IFilteredData = {
      temp: tools.calculateCels(data.main.temp),
      tempMax: tools.calculateCels(data.main.temp_max),
      tempMin: tools.calculateCels(data.main.temp_min),
      feelsLike: tools.calculateCels(data.main.feels_like),
      weatherDescription: data.weather[0].description,
      icon: data.weather[0].icon
    }
    res.json(filteredData)
  }

})


app.get('/forecast/:id', async (req, res) => {
  const city: string = req.params.id;

  if (city === undefined) {
    res.send('Error, la ubicación no fue definida')
  } else {
    const data = await tools.fetchLocation(city, originalEndpoints)

    const lon: string = data.coord.lon
    const lat: string = data.coord.lat

    const fetchDaily = async () => {
      const url: string = originalEndpoints.forecast(lon, lat)
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

    for (let i = 0; i < 5; i++) {
      const dailyDate: Date = new Date(dailyArray[i].dt * 1000);
      const dateString: string = dailyDate.toDateString().slice(0, -5);
      const comma: string = ","
      const position: number = 3
      const finalDate: string = [dateString.slice(0, position), comma, dateString.slice(position)].join('')

      const dailyForecast:IDailyForecast = {
        date: finalDate,
        tempMin: tools.calculateCels(dailyArray[i].temp.min), 
        tempMax: tools.calculateCels(dailyArray[i].temp.max), 
        icon: dailyArray[i].weather[0].icon}


      finalArray.push(dailyForecast)
    }

    res.json(finalArray)

  }
})

app.listen(8080, () => console.log('Listening on port 8080...'))
