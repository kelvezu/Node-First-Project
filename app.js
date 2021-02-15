const express = require('express');
const app = express();

// view engine
// app.set is used for application settings
app.set('view engine', 'ejs');

// listen for request

app.listen(3004);

app.get('/', (req, res) => {
    data = {
        title: 'Home',
        blogs: [
            { title: 'Sample Title 1', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, beatae!" },
            { title: 'Sample Title 2', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, beatae!" },
            { title: 'Sample Title 3', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, beatae!" },
        ]
    }
    res.render('index', data);
});

app.get('/about', (req, res) => {
    data = {
        title: 'About'
    }
    res.render('about', data)
});

app.get('/blogs/create', (req, res) => {
    data = {
        title: 'Create Blog'
    }
    res.render('blogCreate', data) // this will redirect to about if the browser hit the /about-us
})

// mostly use to invoke a middleware
app.use((req, res) => {
    data = {
        title: 'Error'
    }
    res.status(404).render('404', data)
})
