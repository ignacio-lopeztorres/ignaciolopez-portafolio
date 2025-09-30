/**
 * Controller for handling index-related routes.
 */
class IndexController {
    /**
     * Handles GET requests to retrieve all index data.
     * Sends a simple 'index' response.
     * @param {import('express').Request} req - Express request object.
     * @param {import('express').Response} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    getAll (req, res, next) {
        try {
            res.send('index');
        } catch (error) {
            res.send(error);
        }
    }
}

export default new IndexController();