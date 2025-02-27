const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/our-team', (req, res) => {
    res.sendFile(__dirname + '/ourteam.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})