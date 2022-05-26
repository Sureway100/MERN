const express = require('express')
const app = express()
const logger = require('./logger')
//using this middleware, especially when you that your app.get contains a lot of 
//repeating lines, you can put them in a function
app.use(logger)

app.get('/', (req, res) => {
    res.send('HOME coming')
})

app.get('/about', (req, res) => {
    res.send('ABOUT to where')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})