import * as fs from 'node:fs'
import express from 'express'

function parseFile(file, res) {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.write(data)
    })
}

const app = express()
app.get('/', (req, res) => parseFile('./index.html', res))
app.get('/about', (req, res) => parseFile('./about.html', res))
app.get('/contact', (req, res) => parseFile('./contact.html', res))
app.get(/.*/s, (req, res) => parseFile('./404.html', res))

const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(`listening on port ${PORT}`)
})