// create web server
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/comments') {
    fs.readFile('./comments.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        res.writeHead(500)
        res.end()
        return
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})