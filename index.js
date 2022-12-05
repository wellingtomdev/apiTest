const args = process.argv.slice(2)
const port = args[0] || process.env.PORT
if(!port) { throw new Error('No port specified') }

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
})

server.listen(port, () => {
    console.log('Server is listening on port', port)
})