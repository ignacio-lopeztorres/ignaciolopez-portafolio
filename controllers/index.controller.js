/**
 * Controller for handling index-related routes.
 */
class IndexController {
    constructor() {}
    /**
     * Handles GET requests to retrieve all index data.
     * Sends a simple 'index' response.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    getAll (req, res, next) {
        try {
            res.status(200).sendFile('index.html', { root: './views' });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    getById (req, res, next) {
        try {
            res.status(200).send('index by id');
        } catch (error) {
            res.status(500).send(error);
        }
    }

    create (req, res, next) {
        try {
            res.status(201).send('index created');
        } catch (error) {
            res.status(500).send(error);
        }
    }
    update (req, res, next) {
        try {
            res.status(200).send('index updated');
        } catch (error) {
            res.status(500).send(error);
        }   
    }
    delete (req, res, next) {
        try {
            res.status(200).send('index deleted');
        } catch (error) {
            res.status(500).send(error);
        }   
    }

    
}

export default new IndexController();