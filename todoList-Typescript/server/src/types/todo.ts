import {Document} from 'mongoose'

// We have a Todo interface that extends the Document type provided by mongoose
export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}