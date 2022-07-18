import { createServer } from 'node:http';

const server = createServer((request, response) => {
    console.log("request recidived");

    response.statusCode = 200;

    response.setHeader("Content-Type" , "text/html");


    const jsonResponseBody = JSON.stringify()
    response.end("<html><body><h1> ciao mio piccolo server </h1> </body> </html>",
    console.log(" server attivo al local host 3000"));

});

server.listen(3000);


// curl -v localhost:3000
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.81.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Type: text/html
< Date: Mon, 18 Jul 2022 10:52:21 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 62
<
<html><body><h1> ciao mio piccolo server </h1> </body> </html>* Connection #0 to host localhost left intact