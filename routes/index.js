var express = require('express');
var router = express.Router();
var connection = require('../config/config');
var mysql = require('mysql');

connection.connect((error) => {
    if (error) {
        console.log(error.stack);
        return
    } else {
        console.log("Connected as id " + connection.threadId);
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'SQL Practice',
        subtitle: 'Choose a Data Set to View Our Tables'
    });
});
/* Get offices page */
router.get('/offices', function(req, res, next) {
    var selectQuery = "SELECT * FROM offices;";
    connection.query(selectQuery, (error, results, fields) => {
        res.render('offices', {
            title: 'SQL Practice',
            subtitle: 'Offices Data',
            results: results,
            id: 'officeForm',
            td: 6
        });
    });
});
/* GET Employees page. */
router.get('/employees', function(req, res, next) {
    var selectQuery = "SELECT * FROM employees;";
    connection.query(selectQuery, (error, results, fields) => {
        res.render('employees', {
            title: 'SQL Practice',
            subtitle: 'Employees Data',
            results: results,
            id: 'employeeForm',
            td: 5
        });
    });
});
/* GET Customers page. */
router.get('/customers', function(req, res, next) {
    var selectQuery = "SELECT * FROM customers;";
    connection.query(selectQuery, (error, results, fields) => {
        res.render('customers', {
            title: 'SQL Practice',
            subtitle: 'Customer Data',
            results: results,
            id: 'customerForm',
            td: 3
        });
    });
});
/* GET Sum of Each Order page. */
router.get('/sum', function(req, res, next) {
    var selectQuery = "SELECT orderNumber,SUM(priceEach * quantityOrdered) as orderTotal FROM orderDetails GROUP BY orderNumber;";
    connection.query(selectQuery, (error, results, fields) => {
        res.render('sum', {
            title: 'SQL Practice',
            subtitle: 'Sum of Each Order Data',
            results: results,
            id: 'sumForm',
            td: 3
        });
    });
});

module.exports = router;