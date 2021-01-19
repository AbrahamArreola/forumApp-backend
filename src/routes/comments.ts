import {CommentController} from '../controllers/comment-controller'
import express from 'express'

const commentController = new CommentController()
const app = express.Router()

app.get('/comments', commentController.get)
app.post('/comments/create', commentController.create)
app.put('/comments/update/:id', commentController.update)
app.delete('/comments/delete/:id', commentController.delete)

export default app