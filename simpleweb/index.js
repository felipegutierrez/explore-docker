const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there! Hello word in Node.js using docker image =). How are you doing?');
});

app.listen(8080, () => {
    console.log('listenning on port 8080');
});
