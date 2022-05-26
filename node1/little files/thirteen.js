const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
    console.log('request0 ' + req.url)
  res.send(`<h1> home page</h1><a href="/api/products"> products </a>`)
})

app.get('/api/products', (req, res) => {
    console.log('request1 ' + req.url)
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
  })

  // when url starts with : means it is placeholder, so user can say 1 or 2 or 3..input replaces it
  //params are placeholders in url
app.get('/api/products/:productID', (req, res) => {
    console.log('request2 ' + req.url)
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).send('product does not exit')
    }
    res.json(singleProduct)
})



app.get('/api/v1/query', (req, res) => {
    console.log('request2 ' + req.url)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return res.status(200).json({success: true, data: [] })
    }
    res.status(200).json(sortedProducts)

})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen