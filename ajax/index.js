const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('src'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
//     res.setHeader('Access-Control-Expose-Headers', '*')
//     next()
// })

app.get('/test_get/:id', function (req, res) {
    console.log(req.get('auth'))
    console.log('query = ', req.query)
    console.log('params = ', req.params)
    res.send('test_get')
})

app.post('/test_post', function (req, res) {
    console.log('body', req.body)
    setTimeout(() => {
        res.send(JSON.stringify(req.body))
    }, 6000);
})

app.get('/jsonp', function (req, res) {
    res.send(`${req.query.callback}(${JSON.stringify({
        name: 'Taylor',
        age: 18
    })})`)
})

app.listen(8080)
