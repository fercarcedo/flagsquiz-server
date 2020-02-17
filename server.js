const express = require('express');
const pgp = require('pg-promise')();

const app = express();
const db = pgp(process.env.DATABASE_URL);

app.post('/api/logs', function(req, res) {
    const body = req.body;
    db.one('INSERT INTO logs(correct, incorrect, time, score, time_until_first_correct, time_until_first, incorrect, max_consecutive_correct, max_consecutive_incorrect) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [body.correct, body.incorrect, body.time, body.score, body.time_until_first_correct, body.time_until_first_incorrect, body.max_consecutive_correct, body.max_consecutive_incorrect])
        .then(() => {
             res.send(200);
        })
        .catch(error => {
             res.send(500);
        });
});

app.listen(process.env.PORT||8080, function () {
    console.log('App running');
});
