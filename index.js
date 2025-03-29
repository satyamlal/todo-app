const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is our Todo List App Home page");
});

app.post("/todo", (req, res) => {
  res.send("Todo route");
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(port, () => {
  console.log("Listening to port 3000");
});
