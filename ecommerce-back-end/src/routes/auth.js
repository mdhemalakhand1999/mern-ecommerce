const express = require("express");
const { check } = require("express-validator");
const {signup, signin,requireSignin} = require('../controller/auth');
const router = express.Router();


router.post("/signin", signin);
router.post("/signup", [
    check('firstname').isEmpty().withMessage("FirstName is required"),
    check('lastname').isEmpty().withMessage("LastName is required"),
    check('email').isEmpty().withMessage("Email is required"),
    check('password').isLength({min: 6}).withMessage("Password must be at last 6 character long"),
] , signup);
// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({
//         user: 'profile'
//     })
// })
module.exports = router;