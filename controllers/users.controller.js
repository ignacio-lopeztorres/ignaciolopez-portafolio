import User from "../models/user.models.js";

class UserController {
    constructor() {}

    /**
     * Retrieve all users from the database.
     * @return {Promise<void>}
     */
    async getAllUsers (req, res, next) {
        try {
            const users = await User.findAll();
            console.log(users);
            res.json(users);
        } catch (error) {
            //next(error);
            console.log(error);
            res.send(error);
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
    /**
     * Create a new user.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @return {Promise<void>}
     */

    async create (req, res, next) {
        try {
            const newUser = {};

            newUser.first_name = req.body.first_name;
            newUser.last_name = req.body.last_name;
            newUser.username = req.body.username;
            newUser.email =  req.body.email;
            newUser.password = req.body.password;
            newUser.password_hash = req.body.passwordHash;
            newUser.role = req.body.role;
            newUser.is_active = req.body.is_active;
            
            console.log(newUser);
            
            const user = await User.create(newUser);

            console.log(user);
            if (!user) {
                return res.status(400).json({ message: 'Error creating user' });
            }

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