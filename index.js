const express = require ('express')

const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())

server.get('/api/*', (req, res) =>{
    res.json({
        cohort: "WEB 41",
    })
})