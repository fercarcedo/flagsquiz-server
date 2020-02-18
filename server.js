const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();
app.use(bodyParser.json());
const db = pgp(process.env.DATABASE_URL);

db.none('CREATE TABLE IF NOT EXISTS logs(user_id INTEGER NOT NULL, correct INTEGER, incorrect INTEGER, time INTEGER, score INTEGER, time_until_first_correct INTEGER, time_until_first_incorrect INTEGER, max_consecutive_correct INTEGER, max_consecutive_incorrect INTEGER, questions_data TEXT)')
    .then(() => console.log('Created table logs'));

app.post('/api/logs', function(req, res) {
    const body = req.body;
    console.log(body);
    db.none('INSERT INTO logs(user_id, correct, incorrect, time, score, time_until_first_correct, time_until_first_incorrect, max_consecutive_correct, max_consecutive_incorrect, questions_data) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [body.user_id, body.correct, body.incorrect, body.time, body.score, body.time_until_first_correct, body.time_until_first_incorrect, body.max_consecutive_correct, body.max_consecutive_incorrect, body.questions_data])
        .then(() => {
             res.send(200);
        })
        .catch(error => {
             console.log(error);
             res.send(500);
        });
});

app.listen(process.env.PORT||8080, function () {
    console.log('App running');
});
