const { urlencoded } = require('express')
const express = require('express')
const app = express()
const {people} = require('./data')


app.use(express.static('./methods-public'))

//if you want to get the form data (parse form data)
//urlencoded is called body parser
app.use(express.urlencoded({ extended:false }))

app.get('/', (req, res) => {
})

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true , data : people})
})


app.post('/api/peoples', (req, res) => {
    const { name } = req.body
    if  (name){
        return res.status(401).json({success:false, msg:`TRY AGAIN`})
    }
    res.status(201).send({success:true , data : [...people, name]})
})

app.get('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body.data.name
    console.log(id, name)
    res.send(`do you want to update this id =  ${id}`)
})



app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if  (name){
        return res.status(200).send(`welcome ${name}`)
    }

    res.status(401).send('PLEASE CHECK FORM DATA AND SUBMIT AGAIN')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// app.get = reading data
// app.post = inserting data
// app.put = update data
// app.delete
// app.all
// app.use == applies middlwwares to all our routes
// app.listen