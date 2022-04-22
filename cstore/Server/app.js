var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var customersRouter = require('./routes/customers');
var employeesRouter = require('./routes/employees')
var categoriesRouter = require('./routes/categories')
var suppliersRouter = require('./routes/suppliers')
var productsRouter = require('./routes/products')
var shippersRouter = require('./routes/shippers')
var ordersRouter = require('./routes/order')


var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/customers', customersRouter)
app.use('/employees', employeesRouter)
app.use('/categories', categoriesRouter)
app.use('/suppliers', suppliersRouter)
app.use('/products', productsRouter)
app.use('/shippers', shippersRouter)
app.use('/orders', ordersRouter)

// catch 404 and forward to error handler




module.exports = app;
