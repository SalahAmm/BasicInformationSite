const https = require('http');
const fs = require('fs');
const path = require('path');

const server = https.createServer((req, res) => {

    let filePath;

    if(request.url === '/' || request.url === '/index.html') {
        filePath = "index.html";

    }

    else if (request.url === '/contact-me.html'){
        filePath = "contact-me.html"

        
    } else if ( request.url === '/about.html') {
        
        filePath = 'about.html'

    } else {
        filePath = '404.html'
    }


    fs.readFile(filePath , (error , data ) => {
        if(error) {
            response.writeHead(500);
            response.end('Server Erorr');
            return;
        }

        // '200' is code for the server that means OK , tell the browser were sending Html

        response.writeHead(200 ,  {'Content-Type': 'text/html'});
        response.end(data);
    })

    server.listen(8080 , () => {
        console.log('server is running at http://localhost:8080');
    })

})




