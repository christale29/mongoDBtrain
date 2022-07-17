const express = require("express");
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const staffRoute = require('./src/routes/staff')
const dotenv = require('dotenv')
dotenv.config();




const app = express();
app.use(bodyParser.json());
app.use('/data',staffRoute)
app.get('/',(req,res)=>{
    res.send("this is API")
})
const dburl=process.env.DATABASEURL;


mongoose.connect(dburl,{ 
    
} ).then(()=>console.log("database connected successfully"))
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
module.exports = app;