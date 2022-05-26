const http = require('http')
//add a createserver method, add two arguements having the normal conventional names req and res
//add a call back function
//see what request is sent to us
//req qill keep listening, then you res
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('another welcome home')
    }
    if (req.url === '/about'){
        res.end('this is about page')
    }
    res.end(`
    <h1> ooops try again <h1>
    
    `)
})

//make sure you server keeps listening to request in port 5000

server.listen(5000)