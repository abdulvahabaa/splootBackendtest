import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register User */

export const register = async (req, res) => {
    try {
      console.log("req.body");
      console.log("req.body", req.body);
   
      const {
        name,
        age,
        email,
        password,
      } = req.body;
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name,
        age,
        email,
        password: passwordHash,
      });
      const savedUser = await newUser.save();
      console.log(savedUser)
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

/* LOGGING IN */
export const login = async (req, res) => {

  console.log("reqest helre>>>>>>>>>")
  console.log(req.body)
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
   
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const expiresIn = '30m'; // Expiry time of 30 minuts
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{ expiresIn });
      delete user.password;
      res.status(200).json({ token, user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };