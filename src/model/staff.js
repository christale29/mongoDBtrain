const mongoose = require('mongoose')
 const staffSchema = mongoose.Schema(
        {
            firstName:String,
            lastName:String,
           
            Email:{
                type:String,
                required:true,
            },
            phone: {
             type:String,
             required:true,
             unique:true,
            },
        }
    )
    const staff = mongoose.model('staff',staffSchema)

module.exports = staff
