const mongoose = require('mongoose');

async function connectDb() {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("Connect to Db")
}

module.exports = connectDb