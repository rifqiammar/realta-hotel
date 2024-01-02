var validator = require("validator");
const { User } = require("../../../models");

const signUpValidator = async (req, res, next) => {
  const { username, email, password, confirmPassword, phone } = req.body;

  const data = { username, email, password, confirmPassword, phone };

  // tempError
  let errorMsg = [];

  // Check Jika body kosong
  for (let key in data) {
    if (validator.isEmpty(data[key].trim())) {
      // const error = new Error(`${key} tidak boleh kosong!`);
      // error.statusCode = 400;
      // return next(error);

      errorMsg.push([key, `${key} tidak boleh kosong!`]);
    }
  }

  // Username Duplicate Check
  const duplicate = await User.schema("users").findOne({
    where: { user_full_name: username },
  });

  if (duplicate) {
    errorMsg.push(["duplicate", `Username ${username} sudah tersedia!`]);
  }

  // Username letter format
  if (!validator.isAlpha(username.replace(/\s/g, ""))) {
    errorMsg.push(["username", `${username} harus huruf!`]);
  }

  // Email Format
  if (!validator.isEmail(email)) {
    errorMsg.push(["email", `${email} format email salah!`]);
  }

  // Password Lenght
  if (!/^.{6,}$/.test(password)) {
    errorMsg.push(["passwordLength", "Password anda harus 6 karakter! "]);
  }

  // Password Confirmation
  if (!validator.equals(password, confirmPassword)) {
    errorMsg.push(["passwordConf", "Konfirmasi password anda tidak cocok! "]);
  }

  // Phone Format
  if (!validator.isMobilePhone(phone, ["id-ID"])) {
    errorMsg.push(["phone", "Nomer Hp harus format indonesia! "]);
  }

  if (errorMsg.length > 0) {
    return next(errorMsg);
  }

  next();
};

const guestSignUpValidation = (req, res, next) => {
  const { phone } = req.body;

  if (validator.isEmpty(phone.trim())) {
    const error = new Error(`Phone Number tidak boleh kosong!`);
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

module.exports = { signUpValidator, guestSignUpValidation };
