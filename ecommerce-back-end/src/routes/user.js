const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signin", function (req, res) {
    res.status(200).json({
        message: "Signin route",
    });
});
router.post("/signup", function (req, res) {
    const {
        firstname,
        lastname,
        email,
        password,
        username
    } = req.body;

    // Check if 'username' is provided and not null.
    if (!username) {
        return res.status(400).json({
            message: "Username is required",
        });
    }

    User.findOne({ email: email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({
                    message: "User Already Registered",
                });
            }

            // Create a new User document with a valid username.
            const _user = new User({
                firstname,
                lastname,
                email,
                password,
                username: username // Use the provided username.
            });

            return _user.save()
                .then((user) => {
                    if (user) {
                        return res.status(200).json({
                            user: user,
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return res.status(400).json({
                        message: "Something Wrong here",
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                error: "Something went wrong. Please check the console.",
            });
        });
});

module.exports = router;