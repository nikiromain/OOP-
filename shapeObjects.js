
const main = (()=>{
 
    
const prompt = require("prompt-sync")();

const rectangle = require("./rectangle.js")

const circle = {

    radius: 0, 

    areaofCircle ()
    {
        return Math.PI * radius 
    }
}



rectangle.length = parseInt(prompt("Please enter a lenght: "));

rectangle.width = parseInt(prompt("Please enter a width: "));

console.log(`${rectangle.areaOfRectangle()}`)

console.log(`${rectangle.perimeterOfRectangle()}`)

    


})();

