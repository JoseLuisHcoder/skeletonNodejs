// dependencies
const express = require('express')
const cors = require('cors')
// las cors nos permite definir de donde queremos recibir peticiciones

//Files
const config = require('../config')

//Initial Config

const app = express()

//Enable Incoming JSON data
app.use(express.json())

//enable cors
app.use(cors())

//ruotes v1
app.get('/', (req, res) => {
    res.status(200).json({
        status:200,
        message: 'OK',
        routes:{
            users:""
        }
    })
})

app.listen((config.api.port, () => {
    console.log(`Server started on ${config.api.host}`);
}))