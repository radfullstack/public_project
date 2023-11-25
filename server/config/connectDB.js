require("dotenv").config();

const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.DB);
        console.log("Database connection " + "\x1b[32m" + "successful" + "\x1b[0m");

    } catch(err){
        console.log("Database connection ","\x1b[32m", "error \n \n", "\x1b[0m", err);
    }
    
}


module.exports = connectDB;