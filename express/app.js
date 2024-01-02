require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./src/routes");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route
app.use(routes);

// Middleware Error Handling
// Semua Error yang ada di Project Api ini akan masuk ke middleware ini jika tidak ada yang menangani
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    error: "error",
    message: err,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
