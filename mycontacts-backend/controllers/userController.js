
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req,res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password ){
        res.status(400);
        throw new Error("Al fields are manadatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    //hash Password

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user =  await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`user created ${user}`)
    if(user){
        res.status(201).json({
            _id: user.id,
             email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error("User data is not valid");
    }
    res.json("xxxxx");
});

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req,res) => {
    const{ username, password} = req.body;
    if(!username || !password)
    res.json({message :"Login the user"});
});

//@desc Current user
//@route GET /api/users/current
//@access private 
const currentUser = asyncHandler (async (req,res) => {
    res.json({message :"Current user"});
});

module.exports = { registerUser, loginUser, currentUser}