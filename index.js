const http = require('http')

const server = http.createServer(function(req, res){
    // Send response
    console.log('request received on' + req.url)

    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')
    } else {
        res.end('page not found') 
    }    
})

server.listen(5001, 'localhost', function() {
    console.log('running')
})