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

app.get('/categories', (req, res) => {
    res.send(Categorys)
});

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
   
    console.log(req.params);
    const detailsNews = Details.find(n => n.id === id);
    res.send(detailsNews);
})

app.listen(port, () => {
    console.log('javascript server running on port', port);
})