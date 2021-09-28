
const errorMiddleware = (error,req, res, next) => {
    
    res.json({message:error.message})
}

module.exports=errorMiddleware