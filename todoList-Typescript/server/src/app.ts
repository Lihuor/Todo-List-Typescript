import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "../src/routes/index"


const app: Express = express();

const PORT: string | number = process.env.PORT || 5000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@jsd.dnv2ijz.mongodb.net/?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(()=> 
        app.listen(PORT, ()=>
            console.log(`Server running on http://localhost:${PORT}`)
            ))
    .catch(error => {
        throw error
    }) 

// Importing the express library that allows us to allows us to access the use() method that helps handle the Todos routes
// Using mongoose package to connect to MongoDB by appending to the URL the credential held on the nodemon.json file