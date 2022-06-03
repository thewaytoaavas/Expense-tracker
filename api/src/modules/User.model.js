import UserSchema from "./user/User.schema.js";

//create new user in the talble
export const createTable = (newUserObj) => {
  return UserSchema(newUserObj).save();
  // return UserSchema.create{newUserObj}
};

//find a user, @userObj should have email and password
export const findUser = (userObj) => {
  return UserSchema.findOne(userObj);
};
