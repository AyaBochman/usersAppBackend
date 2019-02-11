const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//model declaration
const usersSchema = new Schema(
    {
     
        userId:{
          type: String
        },
        balance: {
          type: String,
        
        },
        picture: {
          type: String
        },
        age: {
          type: Number
        },
        name: {
          type: String
        },
        gender: {
          type: String
        },
        company: {
          type: String
        },
        email: {
          type: String
        },
       
      },
      {
        versionKey: false
      }
      // { _id: false }
    )

//model registration
const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

