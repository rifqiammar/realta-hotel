const { Router } = require("express");

const { getSignUp } = require("../controllers/users/signUp");

const usersRoute = Router();

// Sign Up Route
usersRoute.get("/signupemployee", getSignUp);

module.exports = usersRoute;
