const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");

const { userSignupValidator } = require("../validator");


/**
* @swagger
* /api/signup:
*    post:
*       tags:
*       summary: SignUp.
*       description: This is where you can signup
*       responses: 
*            200:
*               description: Signed Up.
*/
router.post("/signup", userSignupValidator, signup);

/**
* @swagger
* /api/signin:
*    post:
*       tags:
*       summary: SignIn.
*       description: This is where you can signin
*       responses: 
*            200:
*               description: Signed In.
*/
router.post("/signin", signin);

/**
* @swagger
* /api/signout:
*    get:
*       tags:
*       summary: SignOut.
*       description: This is where you can signout
*       responses: 
*            200:
*               description: Signed Out.
*/
router.get("/signout", signout);

module.exports = router;