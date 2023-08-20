// Create API controllers: GET, ADD, UPDATE and DELETE Todos
import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

// Fetching data. It receives a req and res parameter and returns as a promise
const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo [] = await Todo.find()
        res.status(200).json({todos})
    } catch (error) {
        throw error
    }
}

// addtodo() receives the body object that contains data entered by the user
const addtodo =async (req:Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, "name" | "description" | "status">

        const todo: ITodo = new Todo ({
            name: body.name,
            description: body.description,
            status: body.status
        })
        
        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo []= await Todo.find()

        res
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos})
    } catch (error) {
        throw error
    }
}

// Using typecasting to avoid typos and restrict the body variable to match ITodo and then create a new Todo base on the model

// To update a todo, we need to extract the id and the body from the req object and then pass them to findByIdAndUpdate(). 

const updateTodo =async (req:Request, res:Response): Promise<void> => {
    try {
        const {
            params: {id},
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            {_id: id},
            body
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo Updated",
            todo: updateTodo,
            todos: allTodos
        })

    } catch (error) {
        throw error
    }
}

// Creating function delete deleteTodo() allows us to delete a Todo from the database. Pull out the id from req and pass it as an argument to findByIdAndDelete() to access the corresponding Todo and delete it from DB.

const deleteTodo =async (req:Request, res: Response): Promise<void> => {
    try {
        
        const deleteTodo: ITodo | null = await Todo.findByIdAndDelete(
            req.params.id
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo Deleted",
            todo: deleteTodo,
            todos: allTodos,
        })

    } catch (error) {
        throw error
    }
}