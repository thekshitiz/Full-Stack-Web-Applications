const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
    // res.send('hello world!')
    res.sendFile(path.join(__dirname, 'views/helloworld.html'))
})

app.listen(port, () => {
    console.log(`your app is running on ${port}`)
})
