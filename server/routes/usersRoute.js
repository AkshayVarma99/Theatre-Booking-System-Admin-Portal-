const router = require('express').Router();
const User = require('../models/userModel');
// import bcryptjs ( provides password hashing functionality)
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const authMiddleware=require("../middlewares/authMiddleware")

//register a new user
// endpoint to register
// function is triggered when client sends post request to this endpoint


router.post("/register", async (req, res) => {

    try {

        //check if user is already existing 
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.send({
                success: false,
                message: "User already exists",
            });
        }

        //hashing the password 
        const salt = await bcrypt.genSalt(10);
        // hashed password
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        //save the user
        const newUser = new User(req.body);
        await newUser.save();
        res.send({ success: true, message: "USER CREATED SUCCESFULLY!" });

    } catch (error) {
        res.send({
            success: false,
            message: error.message,

        }
        )
    }
});


// login a new user 
// endpoint to login
router.post("/login", async (req, res) => {

    try {

        //check if user exists

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.send({
                success: false,
                message: "user does not exist",
            });
        }

        //check if password is correct 
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )

        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid Password",
            });
        }
        const jwtSecret = 'default secret';

        //create and assign a token expires in 1 day
        const token = jwt.sign({userId:user._id}, jwtSecret, {expiresIn : "1d"});
        // create and assign a token expires in 1 d
        //const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, { expiresIn: "1d", });


        res.send({ success: true, message: "User logged in succesfully", data: token });

    } catch (error) {
        res.send({
            success: false,
            message: error.message,

        });
    }



});


//get user details by id 
router.get('/get-current-user', authMiddleware, async(req,res)=>{
    try {
        const user = await User.findById(req.body.userId).select('-password')

        res.send({
            success:true,
            message:"User details fetched successfully",
            data:user,
        });


    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        });
    }
});


module.exports = router;