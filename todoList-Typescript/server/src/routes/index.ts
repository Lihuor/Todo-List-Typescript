import { Router } from "express";
import {getTodos, addtodo, updateTodo, deleteTodo} from "../controllers/todos/index";

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/add-todo", addtodo);
router.put("/edit-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

export default router;

// Now we have 4 routes to get, add, update, and delete todos from the database. And since we already created the functions, the only thing we have to do is import the methods and pass them as parameters to handle the requests