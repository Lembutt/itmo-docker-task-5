const http = require('http');
let counter = 0;
const server = new http.Server();
server
    .on('request', (req, res) => {
        if (req.url == '/') {
            // (возвращается текущее значение счётчика, инкремента не происходит);
            res.end(String(counter))
        } else if (req.url == '/stat') {
            // (возвращается текущее значение счётчика, и происходит инкремент);
            res.end(String(counter))
            counter = counter + 1
        } else if (req.url == '/about') {
            // (возвращается html-страничка)
            res.writeHeader(200, { "Content-Type": "text/html" });
            html = '<h3> Hello , Biziarkin Iaroslav</h3>'
            res.write(html);
            res.end()
        } else {
            // все остальное
            res.end('404')
        }
    })
    .listen(port=8080, hostname='0.0.0.0')