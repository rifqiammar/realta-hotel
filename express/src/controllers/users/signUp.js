const { User, User_Password } = require("../../../models");
const bcrypt = require("bcrypt");

const getDataSignUP = async (req, res) => {
  try {
    const data = await User.schema("users").findAll({
      include: {
        model: User_Password.schema("users"),
      },
    });

    res.status(200).json({
      message: "SignUp Berhasil!",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error.message,
    });
  }
};

const signUp = async (req, res) => {
  console.log(Error);
  try {
    const { username, email, password, phone } = req.body;
    // Enkripsi Password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    let result = await User.schema("users").create(
      {
        user_full_name: username,
        user_email: email,
        user_phone_number: phone,
      },
      {
        returning: true,
      }
    );
    result = JSON.parse(JSON.stringify(result));
    await User_Password.schema("users").create({
      uspa_user_id: result.user_id,
      uspa_passwordHash: hashedPassword,
      uspa_passwordSalt: salt,
    });
    res.status(200).json({
      message: "Success!",
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error.message,
    });
  }
};

module.exports = { signUp, getDataSignUP };
