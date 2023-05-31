import User from "../models/User.js";
import bcrypt from "bcrypt";

// Read
export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const updateUserProfile = async (req,res) =>{
    console.log(req.body)
    console.log("editProfile Api called>>>>>>>>>>>")

    try {
      console.log("req.body",req.body)
      const { userId } = req.params;
      console.log(userId)
      const user = await User.findById(userId);
      console.log(user)

      // update user document
      const updatedUser = await User.findByIdAndUpdate(
        userId, 
        { 
          name: req.body.name,
          age: req.body.age,
          
        },
        { new: true } // set to return the updated document
      );
      console.log(updatedUser)
   
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
 } 

