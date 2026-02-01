const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req,res)=>{
 const {email,password}=req.body;
 if(!email||!password) return res.status(400).json({message:"Missing fields"});
 const hash = await bcrypt.hash(password,10);
 await User.createUser(email,hash);
 res.json({message:"Registered"});
};

exports.login = async (req,res)=>{
 const user = await User.findUserByEmail(req.body.email);
 if(!user) return res.status(400).json({message:"Invalid credentials"});
 const ok = await bcrypt.compare(req.body.password,user.password);
 if(!ok) return res.status(400).json({message:"Invalid credentials"});
 const token = jwt.sign({id:user.id},"SECRET_KEY");
 res.json({token});
};