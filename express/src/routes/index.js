const { Router } = require("express");
const usersRoute = require("./users");

const route = Router();

route.use("/users", usersRoute);

module.exports = route;
