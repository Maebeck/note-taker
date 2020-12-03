const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', function (req, res){
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
app.get('/api/notes', function (req, res) {
    gtetNotes(function (err, data){
        res.json(data);
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});