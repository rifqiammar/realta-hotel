const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);
  jwt.verify(authorization, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403);
    // req.userId = decoded.user_name;
    next();
  });
};

module.exports = verifyToken;
