// create web server
const express = require('express');
const app = express();

const PORT = 3000;

// create a route

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// run the server with node comments.js