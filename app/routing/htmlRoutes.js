var express = require("express");
var path = require("path");

module.exports = function(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.resolve('./app/public/survey.html'));
    });

    app.use('/', function(req, res) {
        res.sendFile(path.resolve('./app/public/home.html'));
    });
}
