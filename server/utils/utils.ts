export{}

const fetch = require("node-fetch");


module.exports = {
    calculateCels: (tempKel:number) => {
        const kelvin:number = 273
        const tempCels:number = Math.round(tempKel - kelvin)
    
        return tempCels
    },
    fetchLocation: async (city:string, endpoints:any) => {
        const url:string = endpoints.current(city)
        
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
