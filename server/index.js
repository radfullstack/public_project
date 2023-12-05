
require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connectDB");
const userController = require("./controllers/userController");
const newsController = require("./controllers/newsController");
const requireAuth = require("./middleware/requireAuth");

const app = express();

// Set cors options
const corsOptions ={
    origin:'http://localhost:3000',
    credentials: true
}

// Attach dependancies
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Connect to database
connectDB();

// Routing
app.post("/api/auth/register", userController.register);
app.post("/api/auth/login", userController.login);
app.post("/api/auth/update", requireAuth, userController.update);
app.get("/api/auth/logout", requireAuth, userController.logout);
app.get("/api/auth/check-auth", requireAuth, userController.checkAuth);
app.get("/api/news/fetch", requireAuth, newsController.fetchNews);
app.get("/api/user/:userId", requireAuth, userController.fetchUser);
app.get("/api/auth/check-admin", userController.checkAdmin);

// Run server
app.listen(process.env.PORT, () => {
    console.log("\x1b[32mServer running on port: " + process.env.PORT + "\x1b[0m");
    console.log("  Local:      " + "http://localhost:" + process.env.PORT + "\n");
});
