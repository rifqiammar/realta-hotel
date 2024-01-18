require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./src/routes");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use(routes);

// Middleware Error Handlind
// Semua Error yang ada akan masuk ke middleware ini jika tidak ada yang menangani
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    error: "Error",
    message: err,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
