require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Route
app.use(routes);

// Middleware Error Handling
// Semua Error yang ada di Project Api ini akan masuk ke middleware ini jika tidak ada yang menangani
app.use((err, req, res, next) => {
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// s
