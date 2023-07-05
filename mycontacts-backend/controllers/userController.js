//@desc Register the user
const asyncHandler = require("express-async-handler");

//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req,res) => {
    res.json({message :"Register the user"});
});

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req,res) => {
    res.json({message :"Login the user"});
});

//@desc Current user
//@route GET /api/users/current
//@access private 
const currentUser = asyncHandler (async (req,res) => {
    res.json({message :"Current user"});
});

module.exports = { registerUser, loginUser, currentUser}