const mongoose = require('mongoose')
 const StaffSchema =new mongoose.Schema(
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

module.exports =  mongoose.model('staff',StaffSchema)
