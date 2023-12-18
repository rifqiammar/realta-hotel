const { Router } = require("express");

const { signUp, getDataSignUP, guestSignUp, addRole } = require("../controllers/users/signUp");
const { signIn } = require("../controllers/users/signIn");
const { getProfile } = require("../controllers/users/userProfile");

const { signUpValidator, guestSignUpValidation } = require("../middlewares/validator/signUpValidator");
const { signInValidation } = require("../middlewares/validator/signIn");
const verifyToken = require("../middlewares/verifyToken");

const usersRoute = Router();

// Sign Up Route
usersRoute.post("/signupemployee", signUpValidator, signUp);
usersRoute.post("/signupguest", guestSignUpValidation, guestSignUp);
usersRoute.get("/signupemployee", getDataSignUP);
usersRoute.get("/addRole", addRole);

// SignIn Route
usersRoute.post("/signin", signInValidation, signIn);

// User Profile Route
usersRoute.get("/userprofile", verifyToken, getProfile);

module.exports = usersRoute;
