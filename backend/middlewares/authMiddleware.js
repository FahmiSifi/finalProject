const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const protect =asyncHandler(async (req,res,next) => {
    
    
    if (req.headers.authorization) {
       
        try
        {
            const token = req.headers.authorization

             const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.userId).select("-password")
            
            next()
        } catch (error) {
            
            res.status(401)
            throw new Error('Not authorized, invalid token ')
        }
        
        
    }
    else
    {
        res.status(401)
        throw new Error('unhotorized ,no token')
    }



})

module.exports=protect
