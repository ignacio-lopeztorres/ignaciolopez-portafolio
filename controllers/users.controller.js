import User from "../models/user.models.js";

class UserController {
    constructor() {}

    async getAll (req, res, next) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getById (req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.send(error);
        }
    }
    async create (req, res, next) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.send(error);
        }
    }   
    async update (req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.update(req.body);
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.send(error);
        }
    }
    async delete (req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.send(error);
        }
    }      
}

export default new UserController();