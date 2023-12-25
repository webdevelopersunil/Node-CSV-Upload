require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect("mongodb+srv://placementcell:purbtZfcKTT3tk2C@cluster0.hsbrows.mongodb.net/?retryWrites=true&w=majority",
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> CSV Upload"))
  .catch((e)=>console.log("Not Connect Mongodb"))
}