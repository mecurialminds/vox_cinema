let db                   = require('./../models/db'),
    config               = require('./../config').config,
    moment               = require('moment'),
    md5                  = require('md5'),
    request              = require('request'),
    _this                = this;


exports.getCities = function(req, res) {
    let query = `SELECT city FROM cinemas GROUP BY city`;
    console.log(query);
    db.readOperation(query, (data) => {
        if (data.success) {
            res.json(data);
        } else res.json(data);
    });
};
exports.getCinemas = function(req, res) {

    if (req.query.city == undefined || req.query.city == null || req.query.city.trim() == '') {
        var err = {};
        err.status = "Error";
        err.msg = "city parameter is missing!";
        res.send(err);
        return;
    }

    let query = `SELECT cinema,id FROM cinemas WHERE city LIKE '${req.query.city}' GROUP BY city`;
    console.log(query);
    db.readOperation(query, (data) => {
        if (data.success) {
            res.json(data);
        } else res.json(data);
    });
};
exports.getCinemaId = function(req, res) {

    if (req.query.cinema == undefined || req.query.cinema == null || req.query.cinema.trim() == '') {
        var err = {};
        err.status = "Error";
        err.msg = "city parameter is missing!";
        res.send(err);
        return;
    }
    let query = `SELECT cinema,id FROM cinemas WHERE cinema LIKE '${req.query.cinema}'`;
    console.log(query);
    db.readOperation(query, (data) => {
        if (data.success) {
            res.json(data);
        } else res.json(data);
    });
};