const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    group:{
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function(next){
     
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()

})

userSchema.methods.matchPassword= async function(Password){
  return await bcrypt.compare(Password,this.password)
}


const User = mongoose.model('User', userSchema)

module.exports=User


