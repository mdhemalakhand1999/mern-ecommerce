const express = require("express");
const {signup, signin, signout} = require('../../controller/admin/auth');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require("../../validators/auth");
const { requireSignin } = require("../../common-middleware");
const router = express.Router();


router.post("/admin/signup", validateSignUpRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSignInRequest, isRequestValidated, signin);
router.post('/admin/signout', signout);
module.exports = router;