"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/todos/index");
var router = (0, express_1.Router)();
router.get("/todos", index_1.getTodos);
router.post("/add-todo", index_1.addtodo);
router.put("/edit-todo/:id", index_1.updateTodo);
router.delete("/delete-todo/:id", index_1.deleteTodo);
exports.default = router;
// Now we have 4 routes to get, add, update, and delete todos from the database. And since we already created the functions, the only thing we have to do is import the methods and pass them as parameters to handle the requests
