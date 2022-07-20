const mongoose = require('mongoose')

const URL = 'mongodb+srv://Arpit:7xS3ErhTzRy3oC55@cluster0.b6k22xq.mongodb.net?retryWrites=true&w=majority'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})