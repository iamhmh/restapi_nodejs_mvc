const express = require('express');
const app = express();
const port = 3000;

/**
 * Routes
 */

const usersRouter = require('./routes/users');

app.use('/api', usersRouter);

/*
 * Middleware d'express qui permet de parser le body des requêtes HTTP en JSON
 */

app.use(express.json());

/**
 * Middleware d'express qui permet de parser le body des requêtes HTTP en urlencoded
 */

app.use(express.urlencoded({ extended: true }));

function onStart() {
    console.log(`Le serveur est ouvert sur le port ${port}`);
}

app.listen(port, onStart);

module.exports = app;