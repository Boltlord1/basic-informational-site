import * as http from 'node:http'
import * as fs from 'node:fs'
import * as url from 'node:url'

function getFile(path) {
    if (path === '/' || path === '') return './index.html'
    else if (path === '/about') return './about.html'
    else if (path === '/contact') return './contact.html'
    else return './404.html'
}

const server = http.createServer((req, res) => {
    const link = url.parse(req.url, true)
    const file = getFile(link.pathname)
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.write(data)
    })
})
server.listen(8080)