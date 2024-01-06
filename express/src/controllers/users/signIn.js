const { User, User_Password, User_Role, Role } = require("../../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.schema("users").findOne({
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
      where: {
        user_full_name: username,
      },
    });

    // Jika Username tidak ditemukan
    if (!user) throw new Error("Username tidak Valid!");

    // Decrypt
    const match = await bcrypt.compare(password, user.User_Password.uspa_passwordHash);
    // Password Check
    if (!match) throw new Error("Password anda salah!");

    const userId = user.user_id;
    const userName = user.user_full_name;

    const accessToken = jwt.sign({ userId, username: userName }, process.env.SECRET_TOKEN, {
      expiresIn: "1m",
    });

    // Creating refresh token not that expiry of refresh
    //token is greater than the access token
    const refreshToken = jwt.sign(
      {
        userId,
        username: userName,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    // Menyimpan Refresh token pada Cookies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      // secure: true,
    });

    res.status(200).json({
      token: accessToken,
      userId,
      username: userName,
      // roles: "",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// Logout
const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  // Clear Cookies
  res.clearCookie("accessToken");
  return res.sendStatus(200);
};

module.exports = { signIn, logout };
