const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const desiredPort = process.env.PORT ?? 1234

const proccesRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            data.timestamp = Date.now()
            // Llamada a una base de datos para almacenar el pokemon
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
        }
      }
  }
}

const server = http.createServer(proccesRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
