class UserController {
    constructor() {}

    getAll (req, res, next) {
        try {
            res.send('respond with a resource');
        } catch (error) {
            res.send(error);        
        }
    }
    getById (req, res, next) {
        try {
            res.send('user by id');
        } catch (error) {
            res.send(error);
        }
    }
    create (req, res, next) {
        try {
            res.send('user created');
        } catch (error) {
            res.send(error);
        }
    }   
    update (req, res, next) {
        try {
            res.send('user updated');
        } catch (error) {
            res.send(error);
        }
    }
    delete (req, res, next) {
        try {
            res.send('user deleted');
        } catch (error) {
            res.send(error);
        }
    }   
    
}

export default new UserController();