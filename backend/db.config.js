const mongoose = require("mongoose")
require('dotenv').config();
exports.ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
        mongoose.disconnect()
        process.exit(1)
    }
}