class UserController {
    constructor() {}

    getAll (req, res, next) {
        try {
            res.send('respond with a resource');
        } catch (error) {
            res.send(error);        
        }
    }
}

export default new UserController();