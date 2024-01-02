const jwt = require("jsonwebtoken");

const refreshToken = (req, res) => {
  try {
    // Destructuring refreshToken from cookie
    const refreshToken = req.cookies.refreshToken;

    // Cek If refresh token Exist
    if (!refreshToken) throw new Error("Token does not exist");

    // Verifying refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        // Wrong Refesh Token
        return res.status(406).json({ message: "Unauthorized" });
      }

      // Correct token we send a new access token
      //  - Decode the Token to get / extract id and username from refresh token
      const userId = decoded.userId;
      const username = decoded.username;

      //  - Create new access token
      const accessToken = jwt.sign({ userId, username }, process.env.SECRET_TOKEN, {
        expiresIn: "5m",
      });

      // Send Api Request
      return res.json({ accessToken });
    });
  } catch (error) {
    return res.status(406).json({ error: error.message, message: "Unauthorized" });
  }
};

module.exports = refreshToken;
