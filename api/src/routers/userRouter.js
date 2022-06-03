import express from "express";
import { createTable, findUser } from "../modules/User.model.js";
const router = express.Router();

// user registration

router.post("/", async (req, res) => {
  try {
    //send data to db quarterly
    const result = await createTable(req.body);
    console.log(result);

    res.json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    let message = error.message;

    if (message.includes("E11000 duplicate key error")) {
      message = "this email is already register";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email, password });

    if (user?._id) {
      return res.json({
        status: "success",
        message: "user login successfully",
        user: user,
      });
    }

    return res.json({
      status: "error",
      message: "Invalid cediantials",
    });
  } catch (error) {}
});

export default router;
