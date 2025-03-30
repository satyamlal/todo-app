const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ssatyamlal:K5TRIZZxYIiybM3C@cluster-1-todo-app.dd1l071.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type : Boolean,
    default : false
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
