const args = process.argv.slice(2)
const [port] = args
if(!port) { throw new Error('Port is required') }
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
})

server.listen(port, () => {
    console.log('Server is listening on port', port)
})