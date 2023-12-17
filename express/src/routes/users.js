const { Router } = require("express");

const { signUp, getDataSignUP } = require("../controllers/users/signUp");
const { signUpValidator } = require("../middlewares/validator/signUpValidator");

const usersRoute = Router();

// Sign Up Route
usersRoute.post("/signupemployee", signUpValidator, signUp);
usersRoute.get("/signupemployee", getDataSignUP);

module.exports = usersRoute;
