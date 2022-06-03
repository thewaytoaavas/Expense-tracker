import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 Character"],
    },

    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxLength: [50, "Name must be less than 50 character"],
    },

    password: {
      type: String,
      required: true,
      minLength: [5, "Password must be more than 5 character"],
      maxLength: [50, "Name must be less than 50 character"],
    },
  },

  {
    timestamps: true,
  }
);
//we just created a new scema called UserScehma, now time to convert that scheme into a real table in our database

export default mongoose.model("user", UserSchema); //users
