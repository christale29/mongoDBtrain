// const express = require("express");
// const mongoose = require ('mongoose')
// const bodyParser = require ('body-parser')
// const staffRoute = require('./src/routes/staff')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const staffRouter = require('./src/routes/staff')
const dotenv = require('dotenv')
dotenv.config();



app.use(express.json()) 
app.use('/',staffRouter)

// app.get('/',(req,res)=>{
//     res.send("this is API")
// })
const dburl=process.env.DATABASEURL;


mongoose.connect(dburl,{ 
    
} ).then(()=>console.log("database connected successfully"))
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
module.exports = app;