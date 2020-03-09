const http = require('http');
// requiring the built-in http module.

const server = http.createServer((req, res) => {
    // creating ES6 function with callback function. It is called whenever a request reaches the server. 
    console.log('server running on 3000');
    // console.log(req);
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello, Server.</h1></body>')
    res.write('</html>')
    res.end();
    /**
     * goodness, okay... A lot going on.
     * It is a website created fully in JavaScript.
     * It's lengthy. We would like to use a html / templated file
     * It needs everything a html file needs plus the content-type.
     * We need to tell it what we want to write with res.write and then, when we are done...
     * we use res.end()
     * 
     * If you try and use res.write after your res.end, it'll just ignore you.
     *  */  
    
});

server.listen(3000);
/**
 * looping process - it will always listen! Ideal
 * console.log('server is running on 3000') is now logging everytime the page is refreshed.
 */