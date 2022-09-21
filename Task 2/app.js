//main page for task 2 solve

import express from "express";
import getUsers from "./models/models.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", function (req, res) {
  let user_name = req.query.name;
 if(user_name) {
    return res.json({
        success: true,
        status: res.statusCode,
        payload: getUsers(user_name),
      });
  }
  res.json({
    success: true,
    status: res.statusCode,
    payload: getUsers(),
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});