const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is our Todo List App Home page");
});

app.post("/todo", (req, res) => {
  res.send("Todo route");
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You inputs are not correct!!!",
    });
    return;
  }
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs!!!",
    });
    return;
  }
});

app.listen(port, () => {
  console.log("Listening to port 3000");
});
