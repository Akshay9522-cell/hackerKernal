const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const { Model } = require('objection');
const knex = require('./db/knex');
const adminRoutes = require('./routes/admin');

Model.knex(knex);
app.set('view engine','hbs')
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/', adminRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
