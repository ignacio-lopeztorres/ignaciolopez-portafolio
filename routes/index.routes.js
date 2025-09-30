/**
 * Express router for handling the home page routes.
 * 
 * @module routes/index
 * @requires express
 * @requires controllers/index.controller
 */


import express from 'express';
import indexController from '../controllers/index.controller.js';
var router = express.Router();

/* GET home page. */
/* GET home page route.
 * Delegates handling to indexController.getAll.
 *
 * @name GET /
 * @function
 * @memberof module:routes/index
 * @inner
 */
router.get('/', indexController.getAll);

    /* GET home page by ID. */
    router.get('/:id', indexController.getById);

    /* POST create home page. */
    router.post('/', indexController.create);

    /* PUT update home page. */
    router.put('/:id', indexController.update);

    /* DELETE home page. */
    router.delete('/:id', indexController.delete);

export default router;
