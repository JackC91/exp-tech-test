//main page for task 2 solve

import express from "express";
import getUsers from "./models/models.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    success: true,
    status: res.statusCode,
    payload: getUsers(),
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});