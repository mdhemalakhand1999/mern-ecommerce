const { check, body } = require("express-validator");
const {validationResult} = require('express-validator')
exports.validateSignUpRequest = [
    body('firstname').notEmpty().withMessage("FirstName is required"),
    body('lastname').notEmpty().withMessage("LastName is required"),
    body('username').notEmpty().withMessage("LastName is required"),
    body('email').isEmail().withMessage("Email is not correct format"),
    body('password').isLength({min: 6}).withMessage("Password must be at last 6 character long"),
]
exports.validateSignInRequest = [
    body('email').isEmail().withMessage("Email is not correct format"),
    body('password').isLength({min: 6}).withMessage("Password must be at last 6 character long"),
]

exports.isRequestValidated = ( req, res, next ) => {
    const errors = validationResult(req);
    if(errors.array().length != 0) {
        console.log(errors.array());
        return res.status(400).json({errors: errors.array()})
    }
    next();
}