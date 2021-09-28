const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const generateToken=require('../helpers/generateToken')

const registerUser = asyncHandler(async (req,res) => {
    
    const { name, email, password, group } = req.body
    
    const userExist = await User.findOne({ email })
    
    if (userExist) {
        res.status(400)
        throw new Error('user alerady exist')
    }
    const user = await User.create(req.body)
    if (user) {
        res.status(201).json({
          token: generateToken(user._id),
        });
    }
    else {
        res.status(400)
        throw new Error('failed to register')
    } 
    
})


const authUser=asyncHandler(async(req,res)=>{
    
   const {email,password}=req.body 
   const user=await User.findOne({email})
   if(user && (await user.matchPassword(password))){
       res.json({
           _id:user._id,
           name:user.name,
           token:generateToken(user._id)
       })
   }
   else {
       res.status(400)
       throw new Error('invalid email or password ')
   }

})



module.exports={registerUser,authUser}