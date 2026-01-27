/**
 * Express router for user-related routes.
 * 
 * @module routes/users
 * @requires express
 * @requires ../controllers/users.controller.js
 */
import express from 'express';
import UserController from '../controllers/users.controller.js';
import loginController from "../controllers/login.controller.js";

const router = express.Router();
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

/* GET users listing. */
router.get('/', UserController.getAllUsers);

/* GET user by ID. */
//router.get('/:id', UserController.getById);

/* POST create user. */
router.post('/', UserController.create);

/* PUT update user. */
//router.put('/:id', UserController.update);

/* DELETE user. */
//router.delete('/:id', UserController.delete);

router.post('/login', loginController.login);

export default router;
