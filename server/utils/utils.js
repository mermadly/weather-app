const fetch = require("node-fetch");

module.exports = {
    calculateCels: tempKel => {
        const kelvin = 273
        const tempCels = Math.round(tempKel - kelvin)
    
        return tempCels
    },
    fetchLocation: async (city, endpoints) => {
        const url = endpoints.current(city)
        
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
        return data
    }
}
