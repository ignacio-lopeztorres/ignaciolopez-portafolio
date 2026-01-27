import { where } from "sequelize";
import users from "../models/user.models.js";

// Dummy user data for demonstration

class AuthService {
    async loginService(email, password) {
        console.log(`Attempting login for user: ${email}`);

        const user = await users.findOne({ where: { email: email } });
        
        console.log('Valor de user: ', user.namev  );

        if (user) {
            if(user.password_hash === password) {
                return { success: true, message: 'Login successful' };
            }
            return { success: false, message: 'Invalid password' };
        }
        return { success: false, message: 'Invalid credentials' };
    }

    register(username, password) {
        if (users.find(u => u.username === username)) {
            return { success: false, message: 'Username already exists' };
        }
        const newUser = { id: users.length + 1, username, password };
        users.push(newUser);
        return { success: true, message: 'User registered', userId: newUser.id };
    }
}

export default new AuthService();