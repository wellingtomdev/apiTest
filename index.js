const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
})

server.listen(80, () => {
    console.log('Server is listening on port 80')
})