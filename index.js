const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())

const Categorys = require('./data/categories.json');
const Details = require('./data/details.json')

app.get('/', (req, res) => {
    res.send('server side running for frameworks')
})

app.get('/details', (req, res) => {
    res.send(Details)
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const eatchCategory = Categorys.find(n => n.id === id);
    res.send(eatchCategory);
})

app.get('/categories', (req, res) => {
    res.send(Categorys)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const detailsCategory = Details.find(n => n.id === id);
    res.send(detailsCategory);
})

app.listen(port, () => {
    console.log('javascript server running on port', port);
})