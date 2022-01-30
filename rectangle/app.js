const prompt = require ("prompt-sync")();
const Rectangle = require ("./js/rectangle.js")


const main = (()=>{


    //entry point 

    const len = parseFloat(prompt("Enter the lenght of the rectangle: "))
    const width = parseFloat(prompt("Enter the width of the rectangle: "))

    const rectangle = new Rectangle (len, width)
    
    console.log(`The area of the Rectangle is: ${rectangle.calArea()}`)
    console.log(`The perimenter of the Rectangle is ${rectangle.calPerimeter()}`)



})()