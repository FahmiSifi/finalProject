const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
   
      number:{
             type: Number,
              required:true
      }

   

})

const Group = mongoose.model('Group', groupSchema)

module.exports=Group 

