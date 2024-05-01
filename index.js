const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    let path = '';

    if (req.url === '/') {
        path = 'index';
    } else if (req.url === '/about') {
        path = 'about';
    } else if (req.url === '/contact-me') {
        path = 'contact-me';
    } else if (req.url) {
        return fs.readFile(`404.html`, function(err, data) {
            if (err) throw err;
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    fs.readFile(`${path}.html`, function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);