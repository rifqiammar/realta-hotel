var validator = require("validator");
const { User } = require("../../../models");

const signUpValidator = async (req, res, next) => {
  const { username, email, password, confirmPassword, phone } = req.body;

  const data = { username, email, password, confirmPassword, phone };

  // Check Jika body kosong
  for (let key in data) {
    if (validator.isEmpty(data[key].trim())) {
      const error = new Error(`${key} tidak boleh kosong!`);
      error.status = 400;
      return next(error);
    }
  }

  // Username Duplicate Check
  const duplicate = await User.schema("users").findOne({
    where: { user_full_name: username },
  });

  if (duplicate) {
    const error = new Error(`Username ${username} sudah tersedia!`);
    error.status = 400;
    return next(error);
  }

  // Username letter format
  if (!validator.isAlpha(username.replace(/\s/g, ""))) {
    const error = new Error(`${username} harus huruf!`);
    error.status = 400;
    return next(error);
  }

  // Email Format
  if (!validator.isEmail(email)) {
    const error = new Error(`${email} format email salah!`);
    error.status = 400;
    return next(error);
  }

  // Password Lenght
  if (!/^.{6,}$/.test(password)) {
    const error = new Error("Password anda harus 6 karakter! ");
    error.status = 400;
    return next(error);
  }

  // Password Confirmation
  if (!validator.equals(password, confirmPassword)) {
    const error = new Error("Konfirmasi password anda tidak cocok! ");
    error.status = 400;
    return next(error);
  }

  // Phone Format
  if (!validator.isMobilePhone(phone, ["id-ID"])) {
    const error = new Error("Nomer Hp harus format indonesia! ");
    error.status = 400;
    return next(error);
  }

  next();
};

module.exports = { signUpValidator };
