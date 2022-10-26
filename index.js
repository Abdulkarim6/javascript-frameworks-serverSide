const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const Categorys = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('server side running for frameworks')
})

app.get('/categories', (req, res) => {
    res.send(Categorys)
})

app.listen(port, () => {
    console.log('javascript server running on port', port);
})