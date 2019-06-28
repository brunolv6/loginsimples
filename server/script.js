const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'sucrilhos14',
        database: 'loginsimples'
    }
});


app.post('/', (req, res) => {
    const { email, senha } = req.body;
    db('login').insert({email: email, password: senha})
        .then(()=>res.json("Tudo Certo!"));
});

app.listen(3000);