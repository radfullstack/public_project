const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


async function register(req, res) {
    try {
        // Get reqest data
        const { firstName, lastName, email, password } = req.body;

        // Hash password
        const hashedPassword = bcrypt.hashSync(password, 8);
        
        // Create user with request data
        await User.create({ firstName, lastName, email, password: hashedPassword });

        // Respond
        res.status(200).send({ status: "success", message: "Successfully created account"});
    } catch (err) {
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't register", error: err });
    }
}

async function login(req, res) {
    try {
        // Get reqest data
        const { email, password } = req.body;

        // Query user
        const user = await User.findOne({ email });

        // Cut with 404
        if (!user) return res.status(404).send({ error: 'No user found' });

        // Compare password match
        const passwordMatch = bcrypt.compareSync(password, user.password);

        // Cut with 401
        if (!passwordMatch) return res.status(401).send({ error: 'Incorrect password!' });

        // Create jwt token (30 days)m 
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ user_id: user._id, exp }, process.env.SECRET);

        // Set cookie, include token
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        });
        
        userData = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
        };

        // Respond
        res.status(200).send({ status: "success", message: "Successfully logged in", user: userData});
    } catch (err) {
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't login", error: err });
    }
}

function logout(req, res) {
    try {
        // Clear cookie token and reset exp date
        res.cookie("Authorization", "", { expires: new Date() });

        // Respond
        res.status(200).send({ status: "success", message: 'Logout successful' });
    } catch (err) {
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't logout", error: err });
    }
}

function checkAuth(req, res) {
    try {
        // Respond
        res.status(200).send({ status: "success", message: "Logged in", user: req.user});
    } catch (err) {
        // Respond with error
        res.status(401).send({ status: "error", message: "Not logged in", error: err });
    }
}

function checkAdmin(req, res) {
    try {
        // Respond
        res.status(200).send({ status: "success", message: "Admin pass"});
    } catch (err) {
        // Respond with error
        res.status(401).send({ status: "error", message: "You are not an admin!", error: err });
    }
}

module.exports = {
    register,
    login,
    logout,
    checkAuth,
    checkAdmin,
};