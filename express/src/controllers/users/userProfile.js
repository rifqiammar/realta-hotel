const getProfile = (req, res) => {
  try {
    res.status(200).json("Bismillah, Ok");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

module.exports = { getProfile };
