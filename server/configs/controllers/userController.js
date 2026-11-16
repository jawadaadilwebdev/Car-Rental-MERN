import jwt from "jsonwebtoken";
import User from "../../models/User"
import bcrypt from "bcrypt"

// Generate Token
const generateToken = (userId)=>{
    const payLoad = userId;
    return jwt.sign(payLoad,process.env.JWT_SECRET)
}
// Register User
export const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        if(!name || !email || !password || password.length<8){
            return res.json({succes:false, message:"Fill all the fields"})
        }
        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({succes:false,message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
        const token = generateToken(user._id.toString())
        res.json({succes:true,token})
    } catch (error) {
        console.log(error.message);
        res.json({succes:false,message:error.message})
    }
}