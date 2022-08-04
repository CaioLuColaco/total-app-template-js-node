const express = require('express')
const app = express()

const {serverConfig} = require('./config/settings')

app.use('/')

app.listen(serverConfig.port, () => {
    console.log("SERVER IS RUNNING!")
})