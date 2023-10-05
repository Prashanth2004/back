const express=require('express')
const cors=require("cors")
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectdb = require('./config/connectdb')


dotenv.config()

const app=express()

connectdb()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/api/v1/users',require('./routes/userRoute'))
app.use('/api/v1/transections',require('./routes/transectionRoute'))

const PORT=9000|| process.env.PORT

app.listen(PORT,()=>{
    console.log(`server runnung on port ${PORT}`)
});