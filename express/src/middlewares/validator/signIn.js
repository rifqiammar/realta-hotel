var validator = require("validator");

const signInValidation = (req, res, next) => {
  const { username, password } = req.body;

  if (validator.isEmpty(username)) {
    const error = new Error(`Username tidak boleh kosong!`);
    error.message = "Username tidak boleh kosong";
    error.status = "failed";
    error.statusCode = 400;
    return next(error);
  }

  if (validator.isEmpty(password)) {
    const error = new Error(`Password tidak boleh kosong!`);
    error.message = "Password tidak boleh kosong";
    error.status = "failed";
    error.statusCode = 400;
    return next(error);
  }

  next();
};

module.exports = { signInValidation };
