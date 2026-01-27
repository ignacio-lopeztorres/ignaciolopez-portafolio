import AuthService from "../services/auth.service.js";


class loginController {
    constructor(parameters) {
        // TODO document why this constructor is empty
    }
    async login(req, res) {
        const { email, password } = req.body;
        console.log(email, password);
        const result = await AuthService.loginService(email, password);
        res.json(result);
    }
}

export default new loginController();