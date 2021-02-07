const express = require('express')
const app = express()
const cors = require("cors");
const fetch = require("node-fetch");

app.use(express.json());

const apiKey = "49866814f22224b3a5a22e274ac8d7d8"

const originalEndpoints = {
    currentLocation: `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}`
};


app.get('/v1', (req,res) =>{
    res.send('Base')
})


app.get('/location', async (req,res) =>{
    const url = originalEndpoints.currentLocation

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
    res.send(data)

})


app.listen(8080, () => console.log('Listening on port 8080...'))