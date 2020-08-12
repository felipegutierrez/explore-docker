const express = require('express');
const redis = require('redis');

// test the docker crash and recover with process
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0); // test the docker crash and recover with process
    client.get('visits', (err, visits) => {
        res.send('Hi there! Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listenning on port 8081');
});
