// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY,{ expiresIn: 60*60**24*30 });
    // this.tokens = this.tokens.concat({ token: token });
    // await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
export default mongoose.model('User', userSchema);
