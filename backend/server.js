
const express = require('express')
const dotenv=require('dotenv')
var cors = require("cors")
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")
const errorMiddleware = require('./middlewares/errorMiddleware')
const path=require('path')
const app = express()
dotenv.config()
connectDB()


app.use(cors())

app.use(express.json());


app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

//---------------------deployment------------------------------

__dirname=path.resolve() 

    app.use(express.static(path.join(__dirname,'/frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
})


//---------------------deployment------------------------------



app.use(errorMiddleware)

const PORT=process.env.PORT || 4000

app.listen(PORT,console.log(`server is runing on port ${PORT}`))