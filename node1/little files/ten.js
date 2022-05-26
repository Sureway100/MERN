const http = require('http');
const {readFileSync} = require('fs');

//get all files
const homepage = readFileSync('./navbar-app/index.html')
const homestyles = readFileSync('./navbar-app/styles.css')
const homeimage = readFileSync('./navbar-app/logo.svg')
const homelogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    console.log(req.url)
    const url = req.url;
    //home page
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }
    //about page redirection
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1> this about page tells you about us </h1>')
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homestyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeimage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homelogic)
        res.end()
    }
    //client or server issues
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('<h1>page not found</h1>')
        res.end()
    }

    

})

//make sure you server keeps listening to request in port 5000

server.listen(5000)