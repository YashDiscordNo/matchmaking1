const express = require('express')
const app = express()

const plrtable = new Array()

app.get('/addplayer/:id', ((req, res) => {
    plrtable.push(req.params.id)
    res.send(plrtable.toString())
}))

app.get('/removeplayer/:id', ((req, res) => {
    const index = plrtable.indexOf(req.params.id)
    plrtable.splice(index, 1)
    res.send(plrtable.toString())
}))

app.get('/close', ((req, res) => {
    process.exit()
}))

app.listen(3000)