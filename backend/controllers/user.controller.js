import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) =>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("error in getusersforsidebar",error.message);
        res.status(400).json({error : "Internal server error!!"});
    }
};