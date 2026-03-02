const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const bankingSchema = new mongoose.Schema ({

  name : String,
  email : String,
  password :  {
    type: String,
    required: true,
    select: false // this hides password when fetching user
  }
})

    
const Banking = mongoose.model("Banking",bankingSchema)

module.exports = Banking