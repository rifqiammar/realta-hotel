const { User, User_Password, User_Role, Role } = require("../../../models");
const bcrypt = require("bcrypt");

const getDataSignUP = async (req, res) => {
  try {
    const data = await User.schema("users").findAll({
      include: [
        {
          model: User_Password.schema("users"),
        },
        {
          model: User_Role.schema("users"),
          include: {
            model: Role.schema("users"),
          },
        },
      ],
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
      status: "success",
      message: "SignUp berhasil!",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Signup Gagal!",
      error: error.message,
    });
  }
};

const guestSignUp = async (req, res) => {
  try {
    const { phone } = req.body;

    let result = await User.schema("users").create(
      {
        user_full_name: "Guest",
        user_phone_number: phone,
      },
      {
        returning: true,
      }
    );

    result = JSON.parse(JSON.stringify(result));

    await User_Role.schema("users").create({
      usro_user_id: result.user_id,
      usro_role_id: 1,
    });

    res.status(200).json({
      status: "success",
      message: "Anda berhasil Signup sebagai Guest!",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "maaf anda Gagal Signup sebagai Guest! ",
      error: error.message,
    });
  }
};

// Harcode
const addRole = async (req, res) => {
  try {
    const { role } = req.body;

    await Role.schema("users").create({
      role_name: role,
    });

    res.send("ok");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { signUp, getDataSignUP, guestSignUp, addRole };
