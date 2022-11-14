const http = require('http');
const { Client } = require('pg')
const run = async () => {
    try {
        const client = new Client({
            user: 'postgres',
            host: '192.168.0.201',
            database: 'logs',
            password: 'QWERasdf1'
        })
        await client.connect()
        const server = new http.Server();
        server
            .on('request', async (req, res) => {
                const userAgent = req.headers['user-agent'];
                if (req.url == '/') {
                    // (возвращается текущее значение счётчика, инкремента не происходит);
                    client.query('SELECT MAX(id) as counter FROM logs', (err, dbRes) => {
                        if (err) {
                            res.end(JSON.stringify(err));
                        } else {
                            if (dbRes.rows[0].counter !== null) {
                                res.end(`${dbRes.rows[0].counter}`)
                            } else {
                                res.end('0')
                            }
                        }
                    })
                } else if (req.url == '/stat') {
                    // (возвращается текущее значение счётчика, и происходит инкремент);
                    client.query('SELECT id, datetime, client_info FROM logs', (err, dbRes) => {
                        if (err) {
                            res.end(JSON.stringify(err));
                        } else {
                            res.end(JSON.stringify(dbRes.rows, null, 2))
                        }
                    })
                    client.query('INSERT INTO logs(client_info) VALUES ($1)', [userAgent,], (err) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                } else if (req.url == '/about') {
                    // (возвращается html-страничка)
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    html = '<h3> Hello , Biziarkin Iaroslav</h3>';
                    res.write(html);
                    res.end();
                } else {
                    // все остальное
                    res.end('404');
                }
            })
            .listen(port=8080, hostname='0.0.0.0');
    } catch (error) {
        console.log(error)
        res.end('error')
    } 
}

run()