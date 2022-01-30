const prompt = require ("prompt-sync")()
const Clerk = require ("./js/clerk.js")
const Parcel = require ("./js/parcel.js")


const main = (()=>
{


const weight = parseFloat(prompt ("Enter the weight of the parcel: "))

const parcel = new Parcel (weight)

console.log (`The delivery charge for your parcel of weight : ${parcel.weight} is $${parcel.deliveryCharge().toFixed(2)}`)


})()