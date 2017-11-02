var express = require('express');
var router = express.Router();

// DATABASE SET UP
var mysql = require('mysql');
var connection = mysql.createConnection({
    // need 1 arg: object with props:
    // host, user, password, database
    host: '127.0.0.1',
    user: 'x',
    password: 'x',
    database: 'classicmodels'
});

connection.connect((error) => {
    if (error) {
        console.log(error.stack);
        return
    } else {
        console.log("Connected as id " + connection.threadId);
    }
});

/* GET home page. */
// for query, set up query string, set up connection, return the json results
router.get('/', function(req, res, next) {
    // set up query string
    var selectQuery = "SELECT * FROM customers;";
    // call query() with two args
    // 1. mysql query to run
    // 2. callback to run when done
    connection.query(selectQuery, (error, results, fields) => {
        // res.json(results);
        res.render('index', { results });
    });
    // res.render('index', { title: 'SQL Practice' });
});

module.exports = router;