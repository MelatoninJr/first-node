const http = require('http')
const https = require('https');

const fs = require('fs')

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    let path = './src/'
   if(req.url === '/') {
    path += 'index.html'
   } else if(req.url === '/about') {
    path += 'about.html'
   } else if(req.url === '/contact') {
    path += 'contact-me.html'
   } else {
    path += '404.html'
   }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening')
})