/**
 * Express router for user-related routes.
 * 
 * @module routes/users
 * @requires express
 * @requires ../controllers/users.controller.js
 */

/**
 * GET /users/
 * Retrieves a list of all users.
 * 
 * @name GET/
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 * @returns {void}
 */
import express from 'express';
import UserController from '../controllers/users.controller.js';
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getAll);

export default router;
