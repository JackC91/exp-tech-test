//main page for task 2 solve

import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});