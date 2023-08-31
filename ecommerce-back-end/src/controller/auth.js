const User = require("../models/user");
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')

exports.signup = function (req, res) {
    const errors = validationResult(req);
    if(errors.array().length != 0) {
        return res.status(400).json({errors: errors.array()})
    }
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
}

exports.signin = (req, res) => {
    User.findOne({email: req.body.email}).then((user, err) => {
        if(err) {
            res.status(400).json({
                err: err
            })
        }
        if(user) {
            if(user.authenticate(req.body.password)) {
                const token = jwt.sign({_id: user._id}, process.env.JWT_SETRET, {expiresIn: '1h'});
                const {_id, firstname, lastname, email, role, fullname} = user;
                res.status(200).json({
                    token,
                    user: {
                        _id, firstname, lastname, email, role, fullname
                    }
                })
            } else {
                res.status(500).json({
                    message: "Invalid password"
                })
            }
        } else {
            res.status(400).json("Something wrong here");
        }
    })
}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SETRET);
    req.user = user;
    console.log(token);
    next();
}