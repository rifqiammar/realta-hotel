var validator = require("validator");

const signInValidation = (req, res, next) => {
  const { username, password } = req.body;

  // tempErrorValidation
  let errorMsg = [];

  if (validator.isEmpty(username)) {
    errorMsg.push(["username", "Username tidak boleh kosong!"]);
  }

  if (validator.isEmpty(password)) {
    errorMsg.push(["password", "Password tidak boleh kosong!"]);
  }

  if (errorMsg.length > 0) {
    return next(errorMsg);
  }

  next();
};

module.exports = { signInValidation };
