/**
 * Main application file for the Git News project.
 * Sets up the Express app, middleware, static file serving, and routes.
 *
 * @module app
 * @requires express
 * @requires path
 * @requires cookie-parser
 * @requires morgan
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

import indexRouter from './routes/index.routes.js';
import usersRouter from './routes/users.routes.js';

var app = express();

const __dirname = import.meta.dirname;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;

