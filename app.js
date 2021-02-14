const express = require('express');
const app = express();

// listen for request

app.listen(3004);

app.get('/', (req, res) => {
    // res.send('<h1>Welcome to Express! mon! </h1>');
    // console.log(__dirname);
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about') // this will redirect to about if the browser hit the /about-us
})

// mostly use to invoke a middleware
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
