const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function requireAuth(req, res, next) {
    try {
        // Read token off cookies
        const token = req.cookies.Authorization;

        // Decode the token
        const decoded = jwt.verify(token, process.env.SECRET);

        // Check expiration
        if (Date.now() > decoded.exp) return res.sendStatus(401);

        // Find user using decoded sub
        const user = await User.findById(decoded.user_id);

        if (!user) return res.sendStatus(401);

        // attach user to req
        req.user = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userPrefs: user.userPrefs
        };

        // continue on
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).send({ status: "error", message: 'Unauthorised' });
    }
}

module.exports = requireAuth;