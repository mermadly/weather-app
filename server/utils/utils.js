module.exports = {
    calculateCels: tempKel => {
        const kelvin = 273
        const tempCels = Math.round(tempKel - kelvin)
    
        return tempCels
    }
} 