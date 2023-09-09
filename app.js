const path = require('path');
const express = require('express');
const rashiRoutes = require('./rashiRoutes');

const app = express();

// Template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1. Body parser
app.use(express.json({ limit: '10kb' }));

// 2. Serving static files: All static assets will be served through the Public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rashiRoutes);

module.exports = app;
