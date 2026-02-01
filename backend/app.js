const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/noteRoutes"));

module.exports = app;
