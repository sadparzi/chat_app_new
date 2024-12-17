import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'15D'});
    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 60 * 60 * 1000, //Milliseconds
        httpOnly: true, //preventaccess as attacks.
        sameSite:"strict",
        secure: process.env.NODE_ENV !=="development",
    });
};
export default generateTokenAndSetCookie;