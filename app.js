/**
 * Main application file for the Git News project.
 * Sets up the Express app, middleware, static file serving, and routes.
 *
 * @module app
 * @requires express
 * @requires path
 * @requires cookie-parser
 * @requires morgan
 * @requires http-errors
 * @requires ./routes/index.routes.js
 * @requires ./routes/users.routes.js
 *
 * @constant
 * @type {import('express').Express}
 * @description The Express application instance.
 */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from'morgan';
import createError from 'http-errors';

import indexRouter from './routes/index.routes.js';
import usersRouter from './routes/users.routes.js';

var app = express();

const __dirname = import.meta.dirname;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
export default app;

